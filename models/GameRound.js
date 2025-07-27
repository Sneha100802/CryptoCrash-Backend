const mongoose = require("mongoose");

const gameRoundSchema = new mongoose.Schema({
  roundNumber: Number,
  crashPoint: Number,
  bets: Array,
  cashouts: Array,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("GameRound", gameRoundSchema);
