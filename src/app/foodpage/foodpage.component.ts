import { CartService } from './../services/cart.service';
import { FoodService } from './../services/food/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Foods } from './../shared/models/food';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  food!: Foods;

  constructor(private activatedRoute: ActivatedRoute,
    private foodService: FoodService, private cartService: CartService,
    private router: Router) {
      this.activatedRoute.params.subscribe((params) => {
        if(params['id'])
          this.food = this.foodService.getFoodById(params['id'])
      })
    }

  ngOnInit(): void {
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
