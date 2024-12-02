import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchQuery: string = '';
  products: any[] = [];

  constructor(private foodService: FoodService, private router: Router) { }

  ngOnInit(): void {}

  onSearch(): void {
    if (this.searchQuery) {
      this.foodService.searchProducts(this.searchQuery).subscribe(
        (data) => {
          this.products = data.products || [];
        },
        (error) => {
          console.error('Errore nella ricerca:', error);
        }
      );
    }
  }

  onProductClick(id: string): void {
    this.router.navigate(['/item', id]);
  }
}
