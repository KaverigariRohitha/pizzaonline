import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PizzadetService } from '../pizzadet.service';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';
import {} from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  f:any;
  constructor(public obj:PizzadetService, public r: Router,public themeService:ThemeService){
    this.f = new FormGroup({
      uname:new FormControl("",[Validators.required]),
      email:new FormControl("",[Validators.required,Validators.email]),
      pass:new FormControl("",[Validators.required,Validators.maxLength(10)])
    })
}
// onThemeChange(event: Event): void {
//   const selectedTheme = (event.target as HTMLSelectElement).value;
//   if (selectedTheme === 'Light Theme') {
//     this.themeService.setTheme('light');
//   } else if (selectedTheme === 'Dark Theme') {
//     this.themeService.setTheme('dark');
//   }
// }

validateLogin() {
  this.obj.getreg().subscribe((result: any[]) => {
    const user = result.find(
      u => u.uname === this.f.value.uname && u.email === this.f.value.email && u.pass === this.f.value.pass
    );

    if (user) {
      alert('Login Successful');
      sessionStorage.setItem("uname","f.value.uname")
      this.r.navigate(['view']); // Navigate to the "view" page
    } else {
      alert('Invalid credentials! if new user Register first');
      this.r.navigate(['register']);
    }
  });
}
}

