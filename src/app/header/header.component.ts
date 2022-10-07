import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart!:Cart;
  priceof!: number;
  constructor(private cartService:CartService,private foodService:FoodService) { 
    this.setCart();

  }

  ngOnInit(): void {

  }
  setCart(){
    this.cart=this.cartService.getCart();
  }
removeFromCart(cartItem:CartItem){
  this.cartService.removeFromCart(cartItem.food.id);
  this.setCart();
}
  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.priceof = cartItem.price*quantity
  
    // this.cartService.changeQuantity(cartItem.food.id,quantity);
    console.log("quqntity inside header",quantity);
    console.log("price",cartItem.price);
    console.log("priceof",this.priceof);
    
    return this.priceof,quantity;
    
  }
}
