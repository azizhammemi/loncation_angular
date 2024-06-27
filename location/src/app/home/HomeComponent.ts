import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { Voiture } from '../models/voiture';
import { VoitureServiceService } from '../voiture-service.service';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
  slides = [
    { image: 'assets/images/new-cars-model/ncm1.png', alt: 'Slide 1', title: 'Mercedes-Benz ', description: 'est synonyme de luxe, de performance et d innovation. Fondée en 1926, la marque allemande est mondialement reconnue pour ses véhicules de haute qualité, son design élégant et ses technologies de pointe. Les voitures Mercedes-Benz offrent une expérience de conduite inégalée grâce à leur confort supérieur, leurs moteurs puissants et leurs systèmes de sécurité avancés. Que ce soit pour les berlines élégantes, les SUV robustes ou les voitures de sport dynamiques, Mercedes-Benz représente l excellence automobile et le prestige.' },
    { image: 'assets/images/new-cars-model/ncm2.png', alt: 'Slide 2', title: 'Mazda', description: 'est une marque automobile japonaise réputée pour son ingénierie innovante et son design distinctif. Depuis sa fondation en 1920, Mazda a mis l accent sur une expérience de conduite réactive et agréable, symbolisée par sa philosophie Jinba Ittai , qui signifie le cavalier et le cheval ne font qu un. Les véhicules Mazda sont connus pour leur technologie Skyactiv, qui améliore l efficacité énergétique sans compromettre les performances. Offrant un excellent rapport qualité-prix, Mazda se distingue par son style sportif et ses fonctionnalités avancées' },
    { image: 'assets/images/new-cars-model/ncm3.png', alt: 'Slide 3', title: 'BMW', description: '(Bayerische Motoren Werke) est une marque allemande emblématique fondée en 1916, célèbre pour ses véhicules haut de gamme et ses performances exceptionnelles. BMW est synonyme de dynamisme, de précision et de plaisir de conduire. Les voitures BMW sont conçues avec une attention méticuleuse aux détails, alliant technologie de pointe et design sophistiqué. Les moteurs puissants et les systèmes de suspension avancés assurent une conduite sportive et réactive. Avec une gamme allant des berlines luxueuses aux SUV polyvalents et aux voitures de sport racées, BMW incarne l excellence et l innovation dans l ndustrie automobile.' }
  ];
  currentSlideIndex = 0;

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  previousSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
  user!:any;

    voitures: Voiture[] = [];
    disponibleCars: Voiture[] = [];
    showDeleteDialog = false;
    carIdToDelete: string | undefined;
    userEmail: string | null = '';
  
    constructor(private voitureService: VoitureServiceService,private router: Router) {
    

    }

  ngOnInit() {
    this.startSlider();

    this.voitureService.GETALL().subscribe(cars => {
      this.voitures = cars;
      this.filterDisponibleCars();
    });
  }

  filterDisponibleCars(): void {
    this.disponibleCars = this.voitures.filter(car => car.etat === "disponible");
  }
  images = [
    { src:  'assets/images/brand/br1.png',alt:'1'},
    { src:  'assets/images/brand/br2.png',alt:'1'},
    { src:  'assets/images/brand/br3.png',alt:'1'},
    { src:  'assets/images/brand/br4.png',alt:'1'},
    { src:  'assets/images/brand/br5.png',alt:'1'},
   
    // Add more image paths as needed
  ];

  currentSlide = 0;
  interval: any;


  jumpToSlide(index: number): void {
    this.currentSlide = index;
  }
  startSlider() {
    this.interval = setInterval(() => {
      this.nextSlidee();
    }, 1000); // Change image every 3 seconds (3000 ms)
  }

  nextSlidee() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}