const express = require("express");
const { getWalletBalance } = require("../controllers/walletController");
const router = express.Router();

router.get("/:playerId", getWalletBalance);

module.exports = router;
