import express, { Request, Response } from "express";
import { productControlar } from "./products.controlar";
const router = express.Router()

//============== Products api routes ==============
router.post("/", productControlar.createProduct)
router.get("/", productControlar.getProductsAllData)


export const productRoute = router