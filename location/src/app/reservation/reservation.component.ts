import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoitureServiceService } from '../voiture-service.service';
import { LocationService } from '../location.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Locationn } from '../models/Locationn';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  carId!: string;
  car: any;
  userEmail: string | null = '';
  dateDebut!: string;
  dateFin!: string;
  numero!: string;
  showDeleteDialog = false;
  locations: Locationn[] = [];
  constructor(
    private route: ActivatedRoute,
    private carService: VoitureServiceService,
    private router: Router,
    private locationService: LocationService,

  ) { }
  openDeleteDialog(): void {
    
    this.showDeleteDialog = true;
  }
  ngOnInit(): void {
    // Fetch user email from local storage
    this.userEmail = localStorage.getItem('userEmail');

    if (!this.userEmail) {
      // If user email not found, redirect to login
      this.router.navigate(['/login']);
    } else {
      // If user email found, fetch car details
      this.route.params.subscribe(params => {
        this.carId = params['id'];
        this.carService.getVoitureById(this.carId).subscribe(
          (data) => {
            this.car = data;
          },
          (error) => {
            console.error('Error getting car details', error);
          }
        );
      });

      // Fetch location reservations for the current car
      this.locationService.getLocationsByCarId(this.carId).subscribe(
        (data) => {
          this.locations = data;
        },
        (error) => {
          console.error('Error getting location reservations', error);
        }
      );
    }
  }

 

  addLocation(): void {
    const locationData: Locationn = {
      dateDebut: this.dateDebut,
      dateFin: this.dateFin,
      nom: this.userEmail!,
      image: this.car?.image,
      nomcar: this.car?.Marque,
      numero: this.numero,
      _id: undefined // Assuming _id is optional and will be assigned by the backend
    };
  
    this.locationService.addLocation(locationData)
      .pipe(
        catchError((error) => {
          console.error('Error adding location:', error);
          return throwError('Error adding location: ' + error.message); // Return a more informative error message
        })
      )
      .subscribe(
        (response) => {
          console.log('Location added successfully:', response);
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error subscribing:', error);
          // Optional: Add further error handling here
        }
      );
  }

  confirmReservation(): void {
    if (confirm("Are you sure to add reservation?")) {
      this.addLocation();
    }
  }
}