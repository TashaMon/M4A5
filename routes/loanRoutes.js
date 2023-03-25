const express = require('express');
const loanController = require('../controllers/loanController');
const router = express.Router();

router
  .route('/')
  .get(loanController.getAllloans)
  .post(loanController.createLoan);

router
  .route('/:id')
  .get(loanController.getloan)
  .patch(loanController.updateLoan)
  .delete(loanController.deleteLoan);

module.exports = router;
