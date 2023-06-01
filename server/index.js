import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
const app = express();

import postRouter from "./routes/post.route.js"

app.use(cors());
app.use(express.json());
app.use("/api", postRouter)

app.get("/", (req, res) => {
  res.json({ ok: true, result: "todo ok en la ruta raíz" })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("servidor listo en http://localhost:" + PORT);
});