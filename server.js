require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/db");
const gameSocket = require("./websocket/gameSocket");

const walletRoutes = require("./routes/walletRoutes");
const betRoutes = require("./routes/betRoutes");
const cashoutRoutes = require("./routes/cashoutRoutes");

const app = express();
app.use(express.json());

connectDB();

app.use("/api/wallet", walletRoutes);
app.use("/api/bet", betRoutes);
app.use("/api/cashout", cashoutRoutes);

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

gameSocket(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
