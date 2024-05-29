import express from "express"
import { orderControlars } from "./order.controlars"

const router = express.Router()

router.post("/", orderControlars.createOrder)

export const orderRoute = router 