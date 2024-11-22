import { Component } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchTerm: string = '';
  products: any[] = [];

  constructor(private foodService: FoodService) { }

  onSearch() {
    this.foodService.searchFood(this.searchTerm).subscribe((data: any) => {
      this.products = data.products;
    });
  }
}
