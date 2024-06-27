import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  userEmail: string | null = '';

  userss!: User[];
  constructor(private router: Router,private userService: UsersService) {}

  ngOnInit() {
    this.userEmail = localStorage.getItem('userEmail');
    if (this.userEmail !== 'admin@gmail.com' || this.userEmail === null) {
      this.router.navigate(['/']);
    }else{
      this.userService.getUsers().subscribe((data) => {
        this.userss = data;});
  }
  }
  
}
