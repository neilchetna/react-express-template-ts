import express from "express";
import bodyParser from "body-parser";

const app = express();

app.get("/", (_req, res) => res.json({ foo: "bar" }));

export default app;
