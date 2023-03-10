import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../Services/Auth/userservice';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public userService:UserService){}

}
