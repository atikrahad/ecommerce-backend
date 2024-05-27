import { Request, Response } from "express";
import { productServices } from "./products.services";
import productInputValidationSchema from "./products.inputvalidate";

//===========Product post controlar with error handle===============
const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body
        const validated = productInputValidationSchema.parse(product)
        const result = await productServices.productCreate(validated)
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.issues[0].message || "Something went wrong to create product",
        })
    }
}


//===========All Products get controlar with error handle===============
const getProductsAllData = async (req: Request, res: Response) => {
    try {
        const result = await productServices.getProductsData()
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.issues[0].message || "Something went wrong to create product",
        })
    }
}

export const productControlar = {
    createProduct,
    getProductsAllData
}