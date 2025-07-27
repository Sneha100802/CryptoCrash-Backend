const crypto = require("crypto");

const generateCrashPoint = () => {
  const seed = crypto.randomBytes(16).toString("hex");
  const hash = crypto.createHash("sha256").update(seed).digest("hex");
  const crash = (parseInt(hash.substring(0, 8), 16) % 10000) / 100;
  return Math.max(1.1, crash);
};

module.exports = { generateCrashPoint };
