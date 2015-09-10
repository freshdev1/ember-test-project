import DS from 'ember-data';

var attr = DS.attr;

var paymentTypes = DS.Model.extend({
    name : attr('string'),
    inoutFlag: attr('string'),
    shortCode: attr('string'),
    paymentType: attr('string'),
    bankAccountRequiredFlag: attr('string'),
    depositSlipFlag: attr('string'),
    maccPaymentFlag: attr('string'),
    referenceRequiredFlag: attr('string'),
    confirmationRequiredFlag: attr('string'),
    creditCardRequiredFlag: attr('string'),
    payeeRequiredFlag: attr('string'),
    affectsBankAccountFlag: attr('string'),
    clearanceRequiredFlag: attr('string'),
    paymentRequiredFlag: attr('string'),
    outstandingFlag: attr('string'),
    includeInBankFile: attr('string'),
    defaultDirectPayTypeCode: attr('string'),
    inspecieTransferFlag: attr('string')
});


export default paymentTypes;