import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Locationn } from '../models/Locationn';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-locdate',
  templateUrl: './locdate.component.html',
  styleUrls: ['./locdate.component.css']
})
export class LocdateComponent implements OnInit {
  locations: Locationn[] = [];
  @Input() carImage: string | undefined;
  @Input() locationss: Locationn[] = [];
  @Output() deleteCancelled = new EventEmitter<void>();
  closeModal(): void {
    this.deleteCancelled.emit();
  }
  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.loadLocations();
  }

  loadLocations(): void {
    this.locationService.getLocations().subscribe(
      (data) => {
        this.locations = data;
      },
      (error) => {
        console.error('Error getting locations', error);
      }
    );
  }
}