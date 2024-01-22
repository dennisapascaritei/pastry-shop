import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'Product'

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${environment.apiUrl}/${this.url}`)
  }

  getProductById(id: any) {
    return this.httpClient.get<Product>(`${environment.apiUrl}/${this.url}/${id}`)
  }
  createProduct(newProduct: Product): Observable<Product>{
    return this.httpClient.post<Product>(`${environment.apiUrl}/${this.url}`, newProduct)
  }
}
