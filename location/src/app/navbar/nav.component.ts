import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  userEmail: string | null = '';

  ngOnInit() {
    this.userEmail = localStorage.getItem('userEmail');
  }
  logout(): void {
    // For example, clearing local storage, removing cookies, etc.
    localStorage.removeItem('userEmail'); // Remove userEmail from localStorage
    this.userEmail = null;
  }
}
