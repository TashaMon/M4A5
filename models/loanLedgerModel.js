const mongoose = require('mongoose');

const ledgerSchema = new mongoose.Schema(
  {
    paymentAmount: {
        type: Number,
        required: [true]
    },
    ledgerInterest: {
        type: Number
    },
    ledgerPrincipal: {
        type: Number
    },
    ledgerCreatedDate: {
        type: Date,
        default: Date.now
    },
    ledgerModifiedDate: {
        type: Date,
        default: Date.now
    },
    ledgernIsDeleted: {
        type: Boolean
    }

});
const Ledger = mongoose.model('Ledger', ledgerSchema);

module.exports = Ledger;
