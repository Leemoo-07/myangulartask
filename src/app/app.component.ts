import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  // Import CommonModule for *ngIf

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormsModule,     
    RouterModule,   
    CommonModule,   
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;  
  constructor(private router: Router) {}

  onSubmit() {
    const validUsername = 'admin';
    const validPassword = '12345';

    if (this.username === validUsername && this.password === validPassword) {
      this.isLoggedIn = true; 
      this.router.navigate(['/home']);  
      alert('Login successful!');
    }
    else{
      alert('Invalid username or password!');
      }
  }
}
