import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  productId: string = '';
  productDetails: any = {};

  constructor(private route: ActivatedRoute, private foodService: FoodService) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.foodService.getFoodDetails(this.productId).subscribe((data: any) => {
      this.productDetails = data.product;
    });
  }
}
