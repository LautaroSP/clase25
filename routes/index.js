const express = require('express');
const mainController = require("../controllers/mainController")
const router = express.Router();

router.get ("/", mainController.index)
router.post ("/", mainController.saludo)
module.exports = router;
