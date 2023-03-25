const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
  {
    firstName: {
        type: String,
        required: [true, 'A customer name must have a name'],
        unique: true,
        trim: true,
        maxlength: [40, 'A customer name must have less or equal then 40 characters'],
        minlength: [1, 'A customer name must have more or equal then 1 characters']
     
    },
    middleName: {
        type: String,
        required: [true, 'A customer name must have a name'],
        unique: true,
        trim: true,
        maxlength: [40, 'A customer name must have less or equal then 40 characters'],
        minlength: [1, 'A customer name must have more or equal then 1 characters']
     
    },
    lastName: {
        type: String,
        required: [true, 'A customer name must have a name'],
        unique: true,
        trim: true,
        maxlength: [40, 'A customer name must have less or equal then 40 characters'],
        minlength: [1, 'A customer name must have more or equal then 10 characters']
     
    },
    dateOfBirth: {
        type: Date
    },
    gender: {
        type: String,
        required: [true, 'A customer must have an address'],
        maxlength: [40, 'An gender  must have less or equal then 50 characters'],
        minlength: [1, 'An gender  must have more or equal then 10 characters']
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    modifiedDate: {
        type: Date,
        default: Date.now
    }, 
    loanIsDeleted: {
        type: Boolean
    }

});
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
