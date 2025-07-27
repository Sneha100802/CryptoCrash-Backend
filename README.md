# 🚀 CryptoCrash Backend

This is the backend for a **Crypto Crash Betting Game**, built using **Node.js, Express, MongoDB, and Socket.IO**.  
It allows users to manage wallets, place bets, cash out winnings, and see real-time crash game multipliers.

---

## 📌 Features

✅ Player wallet with BTC & ETH balances  
✅ Live crypto prices using CoinGecko API  
✅ Place bets and cash out winnings  
✅ Real-time crash multiplier using WebSocket  
✅ MongoDB stores players and transactions  

---

## 🛠 Tech Stack

- **Node.js + Express.js** → REST API backend  
- **MongoDB (Mongoose)** → Database  
- **Socket.IO** → Real-time game events  
- **Axios** → Fetch crypto prices  
- **dotenv** → Environment variables  
- **uuid** → Unique transaction hashes  

---

## 📂 Folder Structure

Backend/

├── config/             # Database connection

├── controllers/        # API logic

├── models/             # Mongoose schemas

├── routes/             # API routes

├── scripts/            # Seed script

├── services/           # Crypto price + game logic

├── utils/              # Helper functions

├── websocket/          # Real-time crash game socket

├── test/               # Postman collection

├── server.js           # Main server file

└── .env                # Environment variables

## CMD commands

cd C:\Users\jhasn\OneDrive\Desktop\Projects
mkdir CryptoCrash
cd CryptoCrash
mkdir Backend
cd Backend
npm init -y
npm install express mongoose socket.io axios dotenv uuid nodemon
MONGO_URI=mongodb://127.0.0.1:27017/crypto_crash
PORT=5000
node scripts\seed.js
✅ MongoDB connected
🚀 Server running on port 5000
mongosh
use crypto_crash
db.players.find().pretty()
