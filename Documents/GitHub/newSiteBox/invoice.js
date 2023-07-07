const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  url: String,
  productName: String,
  price: Number,
  weight: Number,
  subtotal: Number,
  precioPorPeso: Number,
  precioTotal: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;
