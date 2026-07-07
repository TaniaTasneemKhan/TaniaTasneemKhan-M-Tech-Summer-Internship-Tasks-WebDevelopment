import express from "express";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";

const router = express.Router();

// Create Order
router.post("/", createOrder);

// Get All Orders
router.get("/", getOrders);

// Get Order By ID
router.get("/:id", getOrderById);

// Update Order
router.put("/:id", updateOrder);

// Delete Order
router.delete("/:id", deleteOrder);

export default router;