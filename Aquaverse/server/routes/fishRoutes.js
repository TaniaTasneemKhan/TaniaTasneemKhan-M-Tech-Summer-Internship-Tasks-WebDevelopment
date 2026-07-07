import express from "express";

import {
  getAllFish,
  getFishById,
  createFish,
  updateFish,
  deleteFish,
} from "../controllers/fishController.js";

const router = express.Router();

// GET all fish
router.get("/", getAllFish);

// GET single fish
router.get("/:id", getFishById);

// CREATE fish
router.post("/", createFish);

// UPDATE fish
router.put("/:id", updateFish);

// DELETE fish
router.delete("/:id", deleteFish);

export default router;