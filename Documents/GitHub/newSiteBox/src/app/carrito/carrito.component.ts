import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product-service.service';
import { InvoiceService } from '../invoice.service';
import { Product } from '../product.model';
import { Invoice } from '../invoice.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  cartItems: Product[] = []; // Initialize cartItems as an array of Products
  orderMade = false; // Initialize orderMade as false

  constructor(private cartService: CartService, private productService: ProductService, private invoiceService: InvoiceService) { 
    // Bind this to makeOrder so that 'this' inside makeOrder refers to the instance of the component
    this.makeOrder = this.makeOrder.bind(this);
  }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items: Product[]) => {
      this.cartItems = items;
    });

    const makeOrderButton = document.querySelector('button[ng-click="makeOrder()"]');
    if (makeOrderButton) {
      makeOrderButton.addEventListener('click', this.makeOrder);
    }
  }

  makeOrder(): void {
    const url = (document.querySelector('#url') as HTMLInputElement)?.value || '';
    const productName = (document.querySelector('#productName') as HTMLInputElement)?.value || '';
    const price = parseFloat((document.querySelector('#price') as HTMLInputElement)?.value || '0');
    const weight = parseFloat((document.querySelector('#weight') as HTMLInputElement)?.value || '0');
    const subtotal = this.productService.calculateSubtotal();
    const pricePorPeso = this.invoiceService.calculateInvoiceWeightPrice(this.productService.calculateTotalWeight());
    const totalPrice = this.invoiceService.calculateInvoiceTotalPrice(this.productService.calculateTotalCost(), pricePorPeso);

    const invoice = new Invoice({
      url,
      productName,
      price,
      weight,
      subtotal,
      precioPorPeso: pricePorPeso,
      totalPrice,
    });

    this.invoiceService.saveInvoice(invoice);
    this.orderMade = true;
  }
}
