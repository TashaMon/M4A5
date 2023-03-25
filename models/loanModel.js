const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema(
  {
    loanType: {
        type: String,
        required: [true, 'A loan must have a type'],
        unique: true,
        trim: true,
        maxlength: [20, 'An address  must have less or equal then 20 characters'],
        minlength: [1, 'An address  must have more or equal then 1 characters']
    },
    loanNumber: {
        type: Number,
        required: [true, 'A customer from must have a phone name'],
        unique: true,
        trim: true,
        maxlength: [11, 'A phone number from  must be 11 characters']
    },
    amount: {
        type: Number
    },
    interestRate: {
        type: Number
    },
    loanTerm: {
        type: Number
    },   
    startDate: {
        type: Date,
        default: Date.now
    },
    loanCreatedDate: {
        type: Date,
        default: Date.now
    },
    loanModifiedDate: {
        type: Date,
        default: Date.now
    },
    loanIsDeleted: {
        type: Boolean
    }

});
const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;
