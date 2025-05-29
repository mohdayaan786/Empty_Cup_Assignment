const express = require('express');
const router = express.Router();

const DesignController = require('../../controllers/design-controller');

router.post('/designs', DesignController.createDesign);
router.get('/designs', DesignController.getAllDesigns);

module.exports = router;