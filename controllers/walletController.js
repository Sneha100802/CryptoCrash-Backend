const Player = require("../models/Player");
const { fetchPrices } = require("../services/cryptoPriceService");

exports.getWalletBalance = async (req, res) => {
  try {
    const player = await Player.findById(req.params.playerId);
    if (!player) return res.status(404).json({ error: "Player not found" });

    const prices = await fetchPrices();
    const usdBalance = {
      BTC: player.wallet.BTC * prices.BTC,
      ETH: player.wallet.ETH * prices.ETH
    };

    res.json({ wallet: player.wallet, usdBalance });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
