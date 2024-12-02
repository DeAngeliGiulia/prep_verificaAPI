import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  productId: string = '';
  productDetails: any;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id')!;
      this.foodService.getProductDetails(this.productId).subscribe(
        (data) => {
          this.productDetails = data.product;
        },
        (error) => {
          console.error('Errore nel recupero dei dettagli:', error);
        }
      );
    });
  }


}
