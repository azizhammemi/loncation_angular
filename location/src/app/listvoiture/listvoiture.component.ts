import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Voiture } from '../models/voiture';
import { VoitureServiceService } from '../voiture-service.service';
@Component({
  selector: 'app-listvoiture',
  templateUrl: './listvoiture.component.html',
  styleUrls: ['./listvoiture.component.css'],
  standalone: true,
  imports: [TableModule, TagModule, RatingModule, ButtonModule, CommonModule],

})
export class ListvoitureComponent implements OnInit {
voitures!: Voiture[];

    constructor(private voitureService: VoitureServiceService) {}

    ngOnInit() {
       this.voitureService.GETALL().subscribe(
      (data) => {
        this.voitures = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des voitures', error);
      }
    );
  }
    
}
