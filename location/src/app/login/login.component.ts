import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private authService: LoginService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }



  login() {
    if (this.loginForm.invalid) {
      console.log("Form is invalid");
      return;
    }

    const loginData = this.loginForm.value;

    this.authService.login(loginData).subscribe(
      response => {
        if (response.success) {
          localStorage.setItem('userEmail', loginData.email);

          // Check if the logged in user is admin
          if (loginData.email === 'admin@gmail.com' && loginData.password === 'admin') {
            this.router.navigate(['/dashboard'])
              .then(() => window.location.reload())
              .catch(err => console.error('Error navigating to dashboard:', err));
          } else {

            // If login is successful and not admin
            console.log('Login successful:', response);
            localStorage.setItem('userEmail', loginData.email);
            this.router.navigate(['/'])
              .then(() => window.location.reload())
              .catch(err => console.error('Error navigating to home page:', err));
          }
        } else {
          // If login fails
          console.error('Login failed:', response.message);
          alert("User not defined");
        }
      },
      error => {
        console.error('Login failed:', error);
        alert("Login failed");
      }
    );
  }
}