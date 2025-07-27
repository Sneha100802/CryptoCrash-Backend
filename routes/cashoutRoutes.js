const express = require("express");
const { cashout } = require("../controllers/cashoutController");
const router = express.Router();

router.post("/", cashout);

module.exports = router;
