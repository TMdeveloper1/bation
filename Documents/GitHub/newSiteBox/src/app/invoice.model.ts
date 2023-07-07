export type InvoiceData = {
  url: string;
  productName: string;
  price: number;
  weight: number;
  subtotal: number;
  precioPorPeso: number;
  totalPrice: number;
}

export class Invoice {
  url: string;
  productName: string;
  price: number;
  weight: number;
  subtotal: number;
  precioPorPeso: number;
  totalPrice: number;

  constructor(data: InvoiceData) {    
    this.url = data.url;
    this.productName = data.productName;
    this.price = data.price;
    this.weight = data.weight;
    this.subtotal = data.subtotal;
    this.precioPorPeso = data.precioPorPeso;
    this.totalPrice = data.totalPrice;
  }
}
