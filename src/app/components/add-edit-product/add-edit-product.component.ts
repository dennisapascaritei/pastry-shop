import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrl: './add-edit-product.component.css'
})
export class AddEditProductComponent{
  product: Product = new Product();

  constructor(private productService: ProductsService){}
  


  addProduct(newProduct: Product) {
    this.productService.createProduct(newProduct)
    .subscribe((data: Product) => {
      this.product = data;
    })
    console.log(this.product)
    
    }

}
