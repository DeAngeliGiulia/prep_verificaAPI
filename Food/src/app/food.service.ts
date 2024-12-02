import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private baseUrl = 'https://world.openfoodfacts.org';

  constructor(private http: HttpClient) { }

  searchProducts(query: string, pageSize: number = 10): Observable<any> {
    const url = `${this.baseUrl}/cgi/search.pl?search_terms=${query}&page_size=${pageSize}&json=true`;
    return this.http.get<any>(url);
  }

  getProductDetails(id: string): Observable<any> {
    const url = `${this.baseUrl}/api/v0/product/${id}.json`;
    return this.http.get<any>(url);
  }
}
