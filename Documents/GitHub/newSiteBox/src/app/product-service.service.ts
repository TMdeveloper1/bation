import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }

  calculateTotalCost(): number {
    let total = 0;
    for (const product of this.products) {
      total += product.price * (product.quantity ?? 1);
    }
    return total;
  }

  calculateTotalWeight(): number {
    let total = 0;
    for (const product of this.products) {
      // Use convertToKg method to convert the product weight to kilograms
      total += this.convertToKg(product.weight, product.weightUnit) * (product.quantity ?? 1);
    }
    return total;
  }

  calculateSubtotal(): number {
    let subtotal = 0;
    for (let product of this.products) {
      subtotal += this.calculateProductSubtotal(product);
    }
    return subtotal;
  }

  // New method to calculate the subtotal for a single product
  calculateProductSubtotal(product: Product): number {
    let subtotal = product.price * (product.quantity ?? 1);
    subtotal += subtotal * 0.07;  // add 7% tax
    return subtotal;
  }

  updateQuantity(index: number, newQuantity: number) {
    if (this.products[index]) {
      this.products[index].quantity = newQuantity;
    }
  }

  convertToKg(weight: number, unit: string): number {
    switch(unit) {
      case 'kg':
        return weight;
      case 'libras':
        return weight * 0.453592;  // Convert lbs to kg
      case 'onzas':
        return weight * 0.0283495;  // Convert oz to kg
      default:
        return weight;
    }
  }
   

}
