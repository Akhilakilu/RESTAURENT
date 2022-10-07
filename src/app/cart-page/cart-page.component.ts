import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  priceof!: number;
  qua!: number;
  qua1!: number;
  pricequantity!: number;
  constructor(private cartService: CartService, private foodService: FoodService) {
    this.setCart();
  }
  ngOnInit(): void {
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem: CartItem, quantityInString: string, price: number) {

    const quantity = parseInt(quantityInString);
    this.qua = quantity;
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();

  }

  inc(cartItem: CartItem) {
    console.log(cartItem);
    cartItem.food.quantity = cartItem.food.quantity + 1;
    cartItem.food.total = cartItem.food.quantity * cartItem.food.price;
  }
  dec(cartItem: CartItem) {
    console.log(cartItem);
    if (cartItem.food.quantity == 0) {
      cartItem.food.quantity = 0
      cartItem.food.totalprice = 0
    }
    else
      cartItem.food.quantity = cartItem.food.quantity - 1;
    cartItem.food.total = cartItem.food.quantity * cartItem.food.price;
    // cartItem.food.totalprice+=cartItem.food.quantity
    // console.log("cartItem.food.totalprice", cartItem.food.totalprice);

  }
tot(cartItem: CartItem){
console.log("cartttttt",cartItem);


}

  //  hai(cartItem:CartItem){
  // cartItem.food.price=cartItem.food.quantity*cartItem.food.price;
  // console.log("tcartItem.food.quantity",cartItem.food.price);
  //  }
}










