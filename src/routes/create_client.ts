import express from "express";
import { Client } from "../entities/Client";

const router = express.Router();

router.post("/api/client", (req, res) => {
  const { firstName, lastName, email, cardNumber, balance } = req.body;
});

export { router as createClientRouter };
