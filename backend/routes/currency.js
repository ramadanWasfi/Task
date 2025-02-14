const express = require('express');
const router = express.Router();

const CurrencyController = require('../controllers/CurrencyController')

router.get('/convert/:from/:to/:amount', CurrencyController.Convert);


module.exports = router;