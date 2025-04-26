import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  themes = [
    { name: 'Light', class: 'light' },
    { name: 'Dark', class: 'dark' },
  ]; 
  changeTheme(event: any): void {
    const selectedTheme = event.target.value;
    document.body.className = selectedTheme;
  }

}
