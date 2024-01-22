import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  @ViewChild('ingredients') ingredients: ElementRef | undefined;
  product: Product = new Product();
  ingredientsExtended = false;
 

  constructor(private prodService: ProductsService,
    private renderer: Renderer2){}

  ngOnInit(): void {
    this.prodService.getProductById("bb9e2d89-fbe4-4d70-8bc3-08dc01ad9f73")
    .subscribe((prod: Product) => {
      this.product = prod;
      console.log(this.product);
    });
  }

  expandIngredients(ingredientsList: string): void {
      var newElement = document.createElement('p');     
      newElement.textContent = ingredientsList;
      this.ingredients?.nativeElement.appendChild(newElement);
      
    }

}
