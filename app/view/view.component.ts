import { Component } from '@angular/core';
import { PizzadetService } from '../pizzadet.service';
import { Observable } from 'rxjs';
import { ipizza } from '../pizzadet.service';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  pizzaarray:ipizza[]=[];
  cartItems: ipizza[] = [];
 
  constructor(public obj:PizzadetService){
    obj.getpizzadet().subscribe(result =>{
      console.log(result); this.pizzaarray=result})
  } 
  //post pizzas to cart for json further from json we get in addtocart
  // getitem(pizza:ipizza){
  //   // Check if the item is already in the cart 
  //   const alreadyAdded = this.cartItems.some(item => item.id === pizza.id);
  //   if (alreadyAdded) { alert(`Pizza (ID: ${pizza.id}) is already in the cart.`); 
  // } 
  // else {
  //   this.obj.postpiz(pizza).subscribe(()=>{
  //     alert(`Pizza ${pizza.id} added to cart successfully`)
  //     this.cartItems.push(pizza);
  //   })
  // }
  // }
  pizzadata!: ipizza;
  parray: ipizza[] = [];
  filteredArray: ipizza[] = []; 
  searchTerm: string = '';

  ngOnInit() {
    this.obj.readpizza().subscribe((c) => {
      this.parray = c;
      this.filteredArray = c; // Initialize filteredArray with all pizzas
    });
  }
  onSearch() {
    this.filteredArray = this.parray.filter((pizza) =>
      pizza.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  searchpizzabytoppings(toppings: string) {
    if (!toppings.trim()) {
      // If no toppings provided, fetch all pizzas
      this.obj.getpizzadet().subscribe(result => {
        this.pizzaarray = result;
      });
    } else {
      // Search for pizzas with the given topping
      this.obj.searchPizzaByToppings(toppings).subscribe(result => {
        if (result.length === 0) {
          alert(`No pizzas found with topping: ${toppings}`);
          this.pizzaarray = [];
        } else {
          this.pizzaarray = result;
        }
      });
    }
  }
  // searchpizzabytoppings(toppings: string) {
  //   console.log(`Searching for toppings: ${toppings}`);
  //   this.obj.searchPizzaByToppings(toppings).subscribe(result => {
  //     console.log(result);
  //     this.pizzaarray = result;
  //   });
  // }
  getitem(pizza: ipizza) {
    // Fetch the current cart items from the server
    this.obj.getpizz().subscribe((cart: ipizza[]) => {
      // Check if the item is already in the cart
      const alreadyAdded = cart.some(item => item.id === pizza.id);
  
      if (alreadyAdded) {
        alert(`Pizza (ID: ${pizza.id}) is already in the cart.`);
      } else {
        // Add to cart if not already present
        this.obj.postpiz(pizza).subscribe(() => {
          alert(`Pizza ${pizza.id} added to cart successfully!`);
        });
      }
    });
  }
  
}

