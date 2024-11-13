
const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, profileController.getProfile);
router.put('/', protect, profileController.updateProfile);
router.put('/password', protect, profileController.updatePassword);

module.exports = router;