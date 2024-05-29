import express from "express"
import { orderControlars } from "./order.controlars"

const router = express.Router()

router.post("/", orderControlars.createOrder)
router.get("/", orderControlars.getAllOrders)

export const orderRoute = router 