const express = require('express');
const router = express.Router();
const Invoice = require('./invoice');


router.post('/invoices', (req, res) => {
    const {
      url,
      productName,
      price,
      weight,
      subtotal,
      precioPorPeso,
      precioTotal
    } = req.body;
  
    const newInvoice = new Invoice({
      url,
      productName,
      price,
      weight,
      subtotal,
      precioPorPeso,
      precioTotal
    });
  
    newInvoice.save()
      .then(() => {
        res.status(201).json({ message: 'Invoice saved successfully' });
      })
      .catch((error) => {
        res.status(500).json({ error: 'Failed to save invoice' });
      });
  });
  
  module.exports = router;
