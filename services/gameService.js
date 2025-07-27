const { generateCrashPoint } = require("./crashAlgo");

let currentMultiplier = 1;
let crashPoint = 2;
let roundActive = false;
let roundNumber = 1;

const startGameLoop = (io) => {
  setInterval(() => {
    if (!roundActive) {
      crashPoint = generateCrashPoint();
      currentMultiplier = 1;
      roundActive = true;

      io.emit("round_start", { roundNumber, crashPoint });

      let interval = setInterval(() => {
        currentMultiplier += 0.05;
        io.emit("multiplier_update", { multiplier: currentMultiplier });

        if (currentMultiplier >= crashPoint) {
          io.emit("round_crash", { crashPoint });
          clearInterval(interval);
          roundActive = false;
          roundNumber++;
        }
      }, 100);
    }
  }, 10000);
};

module.exports = { startGameLoop };
