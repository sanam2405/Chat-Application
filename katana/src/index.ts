import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("haiku server");
});

app.listen(port, () => {
  console.log(`[haiku]: server is running at http://localhost:${port}`);
});