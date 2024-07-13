const express = require('express');
const router = express.Router();
const residentController = require('../controllers/residentController');

router.post('/', residentController.createResident);
router.get('/all', residentController.getAllResidents);
router.get('/:id', residentController.getResidentById);
router.put('/:id', residentController.updateResident);
router.delete('/:id', residentController.deleteResident);

module.exports = router;