import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PizzadetService } from '../pizzadet.service';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    f:any;
    countries:string[]=["India","Saudi Arabia","America","Africa","Uk","Switzerland"];
    constructor(public obj:PizzadetService,public r:Router,public themeService:ThemeService){
      this.f = new FormGroup({
        uname:new FormControl("",[Validators.required]),
        email:new FormControl("",[Validators.required,Validators.email]),
        pass:new FormControl("",[Validators.required,Validators.maxLength(10)]),
        cpass:new FormControl("",[Validators.required,Validators.maxLength(10)]),
        gender:new FormControl('',Validators.required),
        country:new FormControl('',[Validators.required])
        
       
      },{ validators: this.passwordMatchValidator }); // ✅ Apply custom validator);
    }
 
    passwordMatchValidator(control: AbstractControl) {
      const password = control.get('pass')?.value;
      const confirmPassword = control.get('cpass')?.value;
      return password === confirmPassword ? null : { mismatch: true }; // ❌ Return 'mismatch' if passwords don't match
    }
    onsubmit() {
      if (this.f.valid) {
        this.obj.postreg(this.f.value).subscribe(() => {
          alert("Registered Successfully");
          this.r.navigate(['login'])
        });
      } else {
        alert("Please fill in all required fields.");
      }
    }
    
}
