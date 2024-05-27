import express, { Request, Response } from "express";
import { productControlar } from "./products.controlar";
const router = express.Router()

router.post("/", productControlar.createProduct)


export const productRoute = router