import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private apiUrl = 'https://world.openfoodfacts.org/cgi/search.pl';

  constructor(private http: HttpClient) { }

  // Metodo per cercare il cibo
  searchFood(searchTerm: string): Observable<any> {
    const url = `${this.apiUrl}?search_terms=${searchTerm}&page_size=10&json=true`;
    return this.http.get<any>(url);
  }

  // Metodo per ottenere i dettagli di un prodotto per ID
  getFoodDetails(id: string): Observable<any> {
    const url = `https://world.openfoodfacts.org/api/v0/product/${id}.json`;
    return this.http.get<any>(url);
  }
}
