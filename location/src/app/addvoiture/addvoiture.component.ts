import { Component, OnInit } from '@angular/core';
import { Voiture } from '../models/voiture';
import { VoitureServiceService } from '../voiture-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addvoiture',
  templateUrl: './addvoiture.component.html',
  styleUrls: ['./addvoiture.component.css']
})
export class AddvoitureComponent  implements OnInit {
  voiture: Voiture = {
    Marque: '', image: '', Couleur: '', prix: '',etat :'', _id: undefined
  };
  isEditMode: boolean = false;

  constructor(private voitureService: VoitureServiceService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.voitureService.getVoitureById(id).subscribe((voiture: Voiture) => {
        this.voiture = voiture;
      });
    }
  }

  onSubmit(): void {
    if (this.isEditMode) {
      this.voitureService.updateVoiture(this.voiture).subscribe(() => {
        this.router.navigate(['/voiture']);
      });
    } else {
      this.voitureService.addVoiture(this.voiture).subscribe(() => {
        this.router.navigate(['/voiture']);
      });
    }
  }
}
