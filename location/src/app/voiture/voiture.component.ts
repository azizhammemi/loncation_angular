import { Component, OnInit } from '@angular/core';
import { Voiture } from '../models/voiture';
import { VoitureServiceService } from '../voiture-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
  voitures: Voiture[] = [];
  showDeleteDialog = false;
  carIdToDelete: string | undefined;
  userEmail: string | null = '';

  constructor(private voitureService: VoitureServiceService,private router: Router) {}

  openDeleteDialog(carId: string): void {
    this.carIdToDelete = carId;
    this.showDeleteDialog = true;
  }

  deleteCar(): void {
    this.voitureService.OnDelete(this.carIdToDelete!).subscribe(
      () => {
        // Handle successful delete
        this.voitures = this.voitures.filter(car => car._id !== this.carIdToDelete);
        this.showDeleteDialog = false;
      },
      error => {
        // Handle error
        console.error('Error deleting car', error);
        this.showDeleteDialog = false;
      }
    );
  }

  ngOnInit() {
    this.userEmail = localStorage.getItem('userEmail');
    if (this.userEmail !== 'admin@gmail.com' || this.userEmail === null) {
      this.router.navigate(['/']);
    }
      else{
    this.voitureService.GETALL().subscribe(
      (data: Voiture[]) => {
        this.voitures = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des voitures', error);
      }
    );
  }
  }
}