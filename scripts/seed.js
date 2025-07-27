const mongoose = require("mongoose");
const Player = require("../models/Player");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const seedData = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    await Player.deleteMany();

    await Player.insertMany([
      { name: "Alice", wallet: { BTC: 0.01, ETH: 0.5 } },
      { name: "Bob", wallet: { BTC: 0.02, ETH: 1.0 } },
      { name: "Charlie", wallet: { BTC: 0.03, ETH: 0.2 } }
    ]);

    console.log("✅ Seed data inserted");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding:", err);
    process.exit(1);
  }
};

seedData();
