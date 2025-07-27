const Player = require("../models/Player");
const Transaction = require("../models/Transaction");
const { fetchPrices } = require("../services/cryptoPriceService");
const { mockTxHash } = require("../utils/mockTransaction");

exports.placeBet = async (req, res) => {
  try {
    const { playerId, usdAmount, currency } = req.body;
    const player = await Player.findById(playerId);
    if (!player) return res.status(404).json({ error: "Player not found" });

    const prices = await fetchPrices();
    const cryptoAmount = usdAmount / prices[currency];

    if (player.wallet[currency] < cryptoAmount)
      return res.status(400).json({ error: "Insufficient balance" });

    player.wallet[currency] -= cryptoAmount;
    await player.save();

    const tx = await Transaction.create({
      playerId,
      usdAmount,
      cryptoAmount,
      currency,
      type: "bet",
      txHash: mockTxHash(),
      priceAtTime: prices[currency]
    });

    res.json({ message: "Bet placed", tx });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
