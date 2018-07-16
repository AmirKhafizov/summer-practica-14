const express = require('express');
const router = express.Router();
const phoneController = require('../controllers/phones');

router.get('/', phoneController.getAllPhones);
router.post('/', phoneController.addPhone);

module.exports = router;