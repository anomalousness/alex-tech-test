const { Router } = require('express');
const router = Router();
const paymentController = require('../controllers/paymentController');

router.get('/', paymentController.getPayments);

router.post('/', paymentController.addPayment)

module.exports = router;
