import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  q:number=0
  pid:number=0;
  toppings:string="";
  sauce:string="";
  size:string="";
  features:string="";
  price:number=0;
  image:string="";

    constructor(public ob:ActivatedRoute){
      ob.queryParams.subscribe(data=>{
        this.pid = data["a"];
        this.toppings = data["b"];
        this.sauce = data["c"];
        this.size = data["d"];
        this.features = data["e"];
        this.price = data["f"];
        this.image = data["g"];
      
      }
      )
    }
    confirmbuy()
    {
      
      if(this.q==0)
      {
        alert("Please select quantity");
      }
      else if(this.q>5)     
      {
        alert("You can order a maximum of 5 pizzas at a time")
      }
      else if(this.q<0) 
              
      {
        alert("Please select a valid quantity")
      }  
      else if(this.q>0 && this.q<=5)
      {
        alert(`Order Details:
          Pizza ID: ${this.pid}
          Toppings: ${this.toppings}
          Sauce: ${this.sauce}
          Size: ${this.size}
          Features: ${this.features}
          Price: ${this.price}
          quantity: ${this.q}
          price: ${this.price*this.q}`)
          alert("Your order has been placed successfully") 
        alert("Your order will be delivered to your address within 30 minutes") 
        alert("Thank you for ordering with us!")
        alert("Please visit again")

        prompt("Please rate us out of 5 stars")    
      }
  
    }
}
