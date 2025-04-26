import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'onlinepizzaManagement';
  // ngOnInit() {
  //   this.router.navigate(['/home']);
  // }
  constructor(private router: Router){}
  isLoggedIn():boolean{
    return sessionStorage.getItem('uname')!== null;
  }

  logout(){
    sessionStorage.removeItem('uname')
    this.router.navigate(['login'])
  }
}
