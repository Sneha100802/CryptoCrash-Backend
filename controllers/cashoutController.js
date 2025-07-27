const Player = require("../models/Player");
const Transaction = require("../models/Transaction");
const { fetchPrices } = require("../services/cryptoPriceService");
const { mockTxHash } = require("../utils/mockTransaction");

exports.cashout = async (req, res) => {
  try {
    const { playerId, betCrypto, multiplier, currency } = req.body;
    const payoutCrypto = betCrypto * multiplier;

    const player = await Player.findById(playerId);
    if (!player) return res.status(404).json({ error: "Player not found" });

    player.wallet[currency] += payoutCrypto;
    await player.save();

    const prices = await fetchPrices();
    const usdAmount = payoutCrypto * prices[currency];

    const tx = await Transaction.create({
      playerId,
      usdAmount,
      cryptoAmount: payoutCrypto,
      currency,
      type: "cashout",
      txHash: mockTxHash(),
      priceAtTime: prices[currency]
    });

    res.json({ message: "Cashout successful", payoutCrypto, usdAmount, tx });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
