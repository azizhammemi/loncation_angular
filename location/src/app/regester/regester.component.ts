import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-regester',
  templateUrl: './regester.component.html',
  styleUrls: ['./regester.component.css']
})
export class RegesterComponent  implements OnInit {

  form!: FormGroup;

  constructor( private registrationService: RegistrationService,private router:Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      nom:new FormControl (null,[Validators.required]),
      prenom: new FormControl(null,[Validators.required]),

      email:new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required]),
      role: new FormControl('Client'), // Setting default value here
      adresse:new FormControl (null,[Validators.required]),
      telephone: new FormControl(null,[Validators.required]),
    });
  }

  registerUser() {

    if (this.form.valid) {
      console.log("h,h");
      this.registrationService.registerUser(this.form.value)
        .subscribe(
          (response) => {
            this.router.navigate(['/login']);
            console.log('Registration successful:', response);
            // Optionally, display a success message to the user
          },
          (error) => {
            console.error('Registration failed:', error);
            // Optionally, display an error message to the user
          }
        );
    } else {
      this.form.markAllAsTouched();
    }
  }

}