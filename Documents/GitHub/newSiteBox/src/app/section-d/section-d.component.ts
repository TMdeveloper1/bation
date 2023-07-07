import { Component } from '@angular/core';
import { ProductService } from '../product-service.service';
import { Product } from '../product.model';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-section-d',
  templateUrl: './section-d.component.html',
  styleUrls: ['./section-d.component.scss']
})
export class SectionDComponent {
  // Add a new variable for tracking the state of the order
  orderMade = false;

  constructor(
    public productService: ProductService, 
    private cartService: CartService,
    private invoiceService: InvoiceService,
    private router: Router) {} // Inject Router

  calculateTotalPrice(): number {
    return this.invoiceService.calculateInvoiceTotalPrice(
      this.productService.calculateTotalCost(),
      this.calculateWeightPrice()
    );
  }

  calculateWeightPrice(): number {
    return this.invoiceService.calculateInvoiceWeightPrice(this.productService.calculateTotalWeight());
  }

  goToCart(): void {
    // Code to handle navigation to cart...
    this.router.navigate(['/carrito']);
  }

  handleOrder(): void {
    // Add the items to the cart
    this.productService.getProducts().forEach(product => {
      this.cartService.addToCart(product);
    });

    // Set the total cost in InvoiceService
    this.invoiceService.setTotalCost(this.calculateTotalPrice());
  }
}
