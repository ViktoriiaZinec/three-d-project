import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import dalleRoutes from "./routes/dalle.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limig: "50mb" }));

app.use("/api/v1/dalle", dalleRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E" });
});

app.listen(8080, () => console.log("Server has started on port 8080"));
// require("dotenv").config();
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const { Configuration, OpenAIApi } = require("openai");

// const app = express();
// const { OPENAI_API_KEY } = process.env;

// const configuration = new Configuration({
//   apiKey: OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// app.use(bodyParser.json());
// app.use(cors());

// app.listen(8080, () => {
//   console.log("server started");
// });
// app.post("/create", async (req, res) => {
//   const { prompt } = req.body;
//   try {
//     const response = await openai.createImage({
//       prompt,
//       n: 1,
//       size: "512x512",
//     });
//     res.send(response.data.data[0].url);
//   } catch (err) {
//     res.send(err.message);
//   }
// });