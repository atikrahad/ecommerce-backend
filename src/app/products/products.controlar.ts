import { Request, Response } from "express";
import { productServices } from "./products.services";
import productInputValidationSchema from "./products.inputvalidate";
import { z } from "zod";

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

//===========single Products get controlar with error handle===============
const getSingleProduct = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.productId

        const result = await productServices.singleproduct(id)
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.issues[0].message || "Something went wrong to create product",
        })
    }
}

//===========Delete a single Product update controlar with error handle===============
const deleteAProduct = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.productId
        await productServices.deleteProduct(id)
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null
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
    getProductsAllData,
    getSingleProduct,
    deleteAProduct
}