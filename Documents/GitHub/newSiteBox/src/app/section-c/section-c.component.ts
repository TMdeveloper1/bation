import { Component } from '@angular/core';
import { ProductService } from '../product-service.service';

@Component({
  selector: 'app-section-c',
  templateUrl: './section-c.component.html',
  styleUrls: ['./section-c.component.scss']
})
export class SectionCComponent {
  constructor(public productService: ProductService) {}

  calculateFillPercentage(): number {
    const subtotal = this.productService.calculateSubtotal();
    const maxCost = 200;  // Maximum cost the box can hold
    return (subtotal > maxCost) ? 100 : (subtotal / maxCost) * 100;
  }

  excessAmount(): number {
    const subtotal = this.productService.calculateSubtotal();
    return subtotal > 200 ? subtotal - 200 : 0;
  }
}
