import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Locationn } from '../models/Locationn';
import { LocationService } from '../location.service';
import { VoitureServiceService } from '../voiture-service.service';
import { Voiture } from '../models/voiture';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit{
  userEmail: string | null = '';
  title = 'ng2-charts-demo';
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [], // Initialize labels array
    datasets: [
      {
        data: [], // Initialize data array
        label: 'nombre de reservation:',
        fill: false,
        tension: 0.5,
        borderColor: 'white',
        backgroundColor: 'rgba(255,255,255,0.3)'// Set background color to white with transparency
      }
    ]
  };
  public polarAreaChartLabels: string[] = ['disponible', 'non-disponible'];
  public polarAreaChartDatasets: ChartConfiguration<'polarArea'>['data']['datasets'] = [
    { data: [0, 0] } // Initialize data array
  ];
  public polarAreaLegend = true;
  public polarAreaOptions: ChartConfiguration<'polarArea'>['options'] = {
    responsive: false,
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'white' // Set the color of the legend labels to white
        }
      }
    }
  };
  public lineChartLegend = true;
  // Pie
  locations: Locationn[] = [];
  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels: string[] = [];
  public pieChartDatasets: any[] = [];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private router: Router,private locationService: LocationService,private voitureService: VoitureServiceService) {}

  ngOnInit() {
    this.userEmail = localStorage.getItem('userEmail');
    this.locationService.getLocations().subscribe((data: Locationn[]) => {
      this.locations = data;
      this.createLineChart();
      this.createPieChart();
      this.getCarAvailability();
    });
    if (this.userEmail !== 'admin@gmail.com' || this.userEmail === null) {
      this.router.navigate(['/']);
    }
 
  }
  createLineChart() {
    // Count occurrences of each label
    const labelCountMap = this.locations.reduce((acc, loc) => {
      const key = loc.nom;
      acc.set(key, (acc.get(key) || 0) + 1);
      return acc;
    }, new Map<string, number>());
  
    // Assign labels and data
    const sortedLabels = Array.from(labelCountMap.keys()).sort((a, b) => labelCountMap.get(b)! - labelCountMap.get(a)!);
    const sortedData = sortedLabels.map(label => labelCountMap.get(label)!);
  
    // Assign sorted labels and data
    this.lineChartData.labels = sortedLabels;
    this.lineChartData.datasets[0].data = sortedData;

  }
  createPieChart() {
    // Count occurrences of each image
    const imageCountMap = this.locations.reduce((acc, loc) => {
      const key = loc.image; // Using the string representation of image as the key
      acc.set(key, (acc.get(key) || 0) + 1);
      return acc;
    }, new Map<string, number>());
  
    // Sort images by usage count (descending order)
    const sortedImages = Array.from(imageCountMap.entries()).sort((a, b) => b[1] - a[1]);
  
    // Calculate total images
    const totalImages = this.locations.length;
  
    // Calculate percentages for the most used images
    const percentages = sortedImages.map(([image, count]) => (count / totalImages) * 100);
  
    // Assign labels and datasets
    const uniqueNomcar = Array.from(new Set(this.locations.map(loc => loc.nomcar)));
    this.pieChartLabels = uniqueNomcar;

    this.pieChartDatasets = [{
      data: percentages
    }];
  }
  
  getCarAvailability() {
    this.voitureService.GETALL().subscribe((cars: Voiture[]) => {
      const availableCarsCount = cars.filter(car => car.etat === 'disponible').length;
      const unavailableCarsCount = cars.length - availableCarsCount;
      this.updatePolarAreaChartData(availableCarsCount, unavailableCarsCount);
    });
  }

  updatePolarAreaChartData(availableCarsCount: number, unavailableCarsCount: number) {
    // Update the data for polar area chart
    this.polarAreaChartDatasets[0].data = [availableCarsCount, unavailableCarsCount];
  }
}
