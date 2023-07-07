import { Component } from '@angular/core';
import { ProductService } from '../product-service.service';
import { Product } from '../product.model';


@Component({
  selector: 'app-section-a',
  templateUrl: './section-a.component.html',
  styleUrls: ['./section-a.component.scss']
})
export class SectionAComponent {
  product: Product = {
    name: '',
    url: '',
    price: 0,
    weight: 0,
    weightUnit: 'kg',
    quantity: 1
  };

  constructor(private productService: ProductService) {}

  addProduct() {
    this.productService.addProduct(this.product);
    this.product = {
      name: '',
      url: '',
      price: 0,
      weight: 0,
      weightUnit: 'kg',
      quantity: 1
    };
  }
}
