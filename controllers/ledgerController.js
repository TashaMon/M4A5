const Ledger = require('../models/loanLedgerModel');
const APIFeatures = require('./../dataBaseManager/loanDbContext');

exports.getAllLedgers =   async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(Ledger.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const ledgers = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: Ledger.length,
      data: {
        ledgers
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.getLedger = async (req, res) => {
  try {
    const ledger = await Ledger.findById(req.params.id);
    // Course.findOne({ _id: req.params.id })
    const {id} = req.params;
    res.status(200).json({
      status: 'success',
      data: {
        ledger
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createLedger = async  (req, res) => {
  try {
    // const newCourse = new Course({})
    // newCourse.save()

    const newLedger = await Ledger.create(req.body);
    
    res.status(201).json({
      status: 'success',
      data: {
        ledger: newLedger
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};


exports.updateLedger = async (req, res) => {
  try {
    const ledger = await Ledger.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        ledger
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.deleteLedger = async (req, res) => {
  try {
    await Ledger.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};