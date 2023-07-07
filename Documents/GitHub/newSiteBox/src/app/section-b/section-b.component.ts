import { Component } from '@angular/core';
import { ProductService } from '../product-service.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-section-b',
  templateUrl: './section-b.component.html',
  styleUrls: ['./section-b.component.scss']
})
export class SectionBComponent {
  newProduct: Product = {
    name: '',
    url: '',
    price: 0,
    weight: 0,
    weightUnit: 'kg',
    quantity: 1
  };

  constructor(public productService: ProductService) {}

  updateQuantity(index: number, newQuantity: number) {
    this.productService.updateQuantity(index, newQuantity);
  }
}
