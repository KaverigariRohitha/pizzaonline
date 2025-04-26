import { Component } from '@angular/core';
import { PizzadetService } from '../pizzadet.service';
@Component({
  selector: 'app-addtocart',
  standalone: false,
  templateUrl: './addtocart.component.html',
  styleUrl: './addtocart.component.css'
})
export class AddtocartComponent {
  q:number=0
  pid:number=0;
  name:string="";
  toppings:string="";
  sauce:string="";
  size:string="";
  features:string="";
  price:number=0;
  image:string="";
 cartItem:any[]=[];
 totalPrice: number = 0;

 constructor(public obj:PizzadetService){
  obj.getpizz().subscribe((result=>this.cartItem=result)) 
   
}
}