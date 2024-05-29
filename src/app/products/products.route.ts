import express from "express";
import { productControlar } from "./products.controlar";
const router = express.Router()

//============== Products api routes ==============
router.post("/", productControlar.createProduct)
router.get("/", productControlar.getProductsAllData)
router.get("/:productId", productControlar.getSingleProduct)
router.delete("/:productId", productControlar.deleteAProduct)
router.put("/:productId", productControlar.updateAproduct)

export const productRoute = router