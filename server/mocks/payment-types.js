module.exports = function(app) {
  var express = require('express');
  var paymentTypesRouter = express.Router();

  paymentTypesRouter.get('/', function(req, res) {
    res.send({
      'payment-types': [{
        "id": 1,
        "name": "Dishonour",
        "inoutFlag": "O",
        "shortCode": "DISH",
        "paymentType": "A",
        "bankAccountRequiredFlag": "Y",
        "depositSlipFlag": "X",
        "maccPaymentFlag": "N",
        "referenceRequiredFlag": "Y",
        "confirmationRequiredFlag": "Y",
        "creditCardRequiredFlag": "N",
        "payeeRequiredFlag": "N",
        "affectsBankAccountFlag": "N",
        "clearanceRequiredFlag": "Y",
        "paymentRequiredFlag": "Y",
        "outstandingFlag": "N",
        "includeInBankFile": "N",
        "defaultDirectPayTypeCode": null,
        "inspecieTransferFlag": "N"
      },
      {
        "id": 2,
        "name": "Bank Draft",
        "inoutFlag": "O",
        "shortCode": "BD",
        "paymentType": "B",
        "bankAccountRequiredFlag": "Y",
        "depositSlipFlag": "N",
        "maccPaymentFlag": "N",
        "referenceRequiredFlag": "Y",
        "confirmationRequiredFlag": "N",
        "creditCardRequiredFlag": "Y",
        "payeeRequiredFlag": "Y",
        "affectsBankAccountFlag": "Y",
        "clearanceRequiredFlag": "N",
        "paymentRequiredFlag": "Y",
        "outstandingFlag": "N",
        "includeInBankFile": "N",
        "defaultDirectPayTypeCode": null,
        "inspecieTransferFlag": "N"
      },
      {
        "id": 3,
        "name": "CEMTEX",
        "inoutFlag": "I",
        "shortCode": "ADO       ",
        "paymentType": "C",
        "bankAccountRequiredFlag": "N",
        "depositSlipFlag": "X",
        "maccPaymentFlag": "N",
        "referenceRequiredFlag": "Y",
        "confirmationRequiredFlag": "N",
        "creditCardRequiredFlag": "N",
        "payeeRequiredFlag": "N",
        "affectsBankAccountFlag": "Y",
        "clearanceRequiredFlag": "Y",
        "paymentRequiredFlag": "Y",
        "outstandingFlag": "N",
        "includeInBankFile": "N",
        "defaultDirectPayTypeCode": null,
        "inspecieTransferFlag": "N"
      },
      {
        "id": 4,
        "name": "Direct Deposit Out",
        "inoutFlag": "O",
        "shortCode": "DDO       ",
        "paymentType": "D",
        "bankAccountRequiredFlag": "Y",
        "depositSlipFlag": "X",
        "maccPaymentFlag": "Y",
        "referenceRequiredFlag": "Y",
        "confirmationRequiredFlag": "Y",
        "creditCardRequiredFlag": "N",
        "payeeRequiredFlag": "N",
        "affectsBankAccountFlag": "Y",
        "clearanceRequiredFlag": "N",
        "paymentRequiredFlag": "Y",
        "outstandingFlag": "N",
        "includeInBankFile": "Y",
        "defaultDirectPayTypeCode": null,
        "inspecieTransferFlag": "N"
      },
      {
        "id": 5,
        "name": "Bank Direct Deposit",
        "inoutFlag": "O",
        "shortCode": "DD        ",
        "paymentType": "E",
        "bankAccountRequiredFlag": "Y",
        "depositSlipFlag": "X",
        "maccPaymentFlag": "Y",
        "referenceRequiredFlag": "Y",
        "confirmationRequiredFlag": "N",
        "creditCardRequiredFlag": "N",
        "payeeRequiredFlag": "N",
        "affectsBankAccountFlag": "Y",
        "clearanceRequiredFlag": null,
        "paymentRequiredFlag": "Y",
        "outstandingFlag": "N",
        "includeInBankFile": "N",
        "defaultDirectPayTypeCode": null,
        "inspecieTransferFlag": "N"
      },
      {
        "id": 6,
        "name": "Direct Debit Request",
        "inoutFlag": "B",
        "shortCode": "DDR       ",
        "paymentType": "F",
        "bankAccountRequiredFlag": "Y",
        "depositSlipFlag": "X",
        "maccPaymentFlag": "N",
        "referenceRequiredFlag": "Y",
        "confirmationRequiredFlag": "N",
        "creditCardRequiredFlag": "N",
        "payeeRequiredFlag": "Y",
        "affectsBankAccountFlag": "N",
        "clearanceRequiredFlag": "N",
        "paymentRequiredFlag": "Y",
        "outstandingFlag": "N",
        "includeInBankFile": "Y",
        "defaultDirectPayTypeCode": null,
        "inspecieTransferFlag": "N"
      },
      {
        "id": 7,
        "name": "In  Internal Transfer",
        "inoutFlag": "B",
        "shortCode": "INTRAN    ",
        "paymentType": "I",
        "bankAccountRequiredFlag": "N",
        "depositSlipFlag": "N",
        "maccPaymentFlag": "N",
        "referenceRequiredFlag": "N",
        "confirmationRequiredFlag": "Y",
        "creditCardRequiredFlag": "N",
        "payeeRequiredFlag": "N",
        "affectsBankAccountFlag": "Y",
        "clearanceRequiredFlag": "Y",
        "paymentRequiredFlag": "Y",
        "outstandingFlag": "N",
        "includeInBankFile": "N",
        "defaultDirectPayTypeCode": null,
        "inspecieTransferFlag": "Y"
      },
      {
        "id": 8,
        "name": "ANZ Bank File",
        "inoutFlag": "O",
        "shortCode": "ANZBANK   ",
        "paymentType": "K",
        "bankAccountRequiredFlag": "Y",
        "depositSlipFlag": "X",
        "maccPaymentFlag": "Y",
        "referenceRequiredFlag": "Y",
        "confirmationRequiredFlag": "N",
        "creditCardRequiredFlag": "N",
        "payeeRequiredFlag": "N",
        "affectsBankAccountFlag": "Y",
        "clearanceRequiredFlag": "Y",
        "paymentRequiredFlag": "Y",
        "outstandingFlag": "N",
        "includeInBankFile": "N",
        "defaultDirectPayTypeCode": null,
        "inspecieTransferFlag": "Y"
      },
      {
        "id": 9,
        "name": "Money Order (Australia Post)",
        "inoutFlag": "I",
        "shortCode": "M/ORD     ",
        "paymentType": "M",
        "bankAccountRequiredFlag": "N",
        "depositSlipFlag": "X",
        "maccPaymentFlag": "N",
        "referenceRequiredFlag": "Y",
        "confirmationRequiredFlag": "N",
        "creditCardRequiredFlag": "N",
        "payeeRequiredFlag": "N",
        "affectsBankAccountFlag": "Y",
        "clearanceRequiredFlag": "Y",
        "paymentRequiredFlag": "Y",
        "outstandingFlag": "N",
        "includeInBankFile": "N",
        "defaultDirectPayTypeCode": null,
        "inspecieTransferFlag": "Y"
      }]
    });
  });

  paymentTypesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  paymentTypesRouter.get('/:id', function(req, res) {
    res.send({
      'payment-types': {
        id: req.params.id
      }
    });
  });

  paymentTypesRouter.put('/:id', function(req, res) {
    res.send({
      'payment-types': {
        id: req.params.id
      }
    });
  });

  paymentTypesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/paymentTypes', paymentTypesRouter);
};
