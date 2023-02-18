import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();

app.use(bodyParser.json());
app.use(cors());

const server = app.listen(2567, () => {
  console.log("Server is running on port 2567");
});

app.get("/123/ar", (req, res) => {
  console.log("12312321");
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, "taiwan0212.glb");
  console.log(filePath);
  res.download(filePath);
});

app.get("/123/ar1", (req, res) => {
  console.log("12312321");
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = path.join(__dirname, "taiwan0212.usdz");
  console.log(filePath);
  res.download(filePath);
});
