import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public product: any = [];
  public grandTotal: number;//storing the total amount   
  ngOnInit(): void {
    this.cartService.getprdt().subscribe(res => {
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  constructor(private cartService: CartService) { }
  //to remove single item  
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  //to remove entire cart  
  emptycart() {
    this.cartService.removeAllCart();
  }

}
