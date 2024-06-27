import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from '../location.service';
import { Locationn } from '../models/Locationn';

@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.css']
})
export class ListLocationComponent implements OnInit{
  loca: Locationn[] = [];

  constructor(private locationService: LocationService,private router:Router) { }
  userEmail: string | null = '';

  ngOnInit(): void {
  
    this.getLocations();
  
  }

  getLocations(): void {
    this.locationService.getLocations().subscribe(
      (data: Locationn[]) => {
        this.loca = data;
        console.log(data)
      },
      (error) => {
        console.error('Error fetching locations:', error);
      }
    );
  }
}