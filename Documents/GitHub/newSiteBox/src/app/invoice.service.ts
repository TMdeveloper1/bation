import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from './invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private totalCost: number = 0; // Initialize totalCost to 0

  constructor(private http: HttpClient) { } // Inject HttpClient to make HTTP requests

  setTotalCost(totalCost: number): void {
    this.totalCost = totalCost;
  }

  getTotalCost(): number {
    return this.totalCost;
  }

  calculateInvoiceTotalPrice(totalCost: number, weightPrice: number, otherCost: number = 15): number {
    return totalCost + weightPrice + otherCost;
  }

  calculateInvoiceWeightPrice(totalWeight: number, rate: number = 10): number {
    return Math.ceil(totalWeight) * rate;
  }

  saveInvoice(invoice: Invoice): void {
    // Send the invoice data to your server, replace '/api/invoice' with your actual endpoint
    this.http.post('/api/invoice', invoice).subscribe();
  }
}
