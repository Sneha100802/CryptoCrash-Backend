const { startGameLoop } = require("../services/gameService");

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("🔗 Client connected:", socket.id);

    socket.on("cashout", (data) => {
      io.emit("player_cashout", data);
    });

    socket.on("disconnect", () => {
      console.log("❌ Client disconnected:", socket.id);
    });
  });

  startGameLoop(io);
};
