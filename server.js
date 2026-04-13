const express = require("express");
const app = express();

app.use(express.json());

let botData = {
  status: "OFF",
  balance: 0,
  profit: 0,
  lot: 0.1
};

app.get("/status", (req, res) => {
  res.json({ status: botData.status, lot: botData.lot });
});

app.post("/status", (req, res) => {
  botData.status = req.body.status;
  res.json({ status: botData.status });
});

app.post("/update", (req, res) => {
  botData.balance = req.body.balance;
  botData.profit = req.body.profit;
  res.json({ message: "updated" });
});

app.get("/data", (req, res) => {
  res.json(botData);
});

app.listen(3000);
