const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware'); // Ensure middleware protects routes
const requestController = require('../controllers/requestController');

// Define routes and attach the controller functions
router.post('/createRequest', protect, requestController.createRequest);
router.put('/update/:id', protect, requestController.updateRequest);
router.get('/view/:id', protect, requestController.viewRequest);
router.delete('/delete/:id', protect, requestController.deleteRequest);
router.get('/list', protect, requestController.listRequestsBySocietyAndAdmin);

module.exports = router;
