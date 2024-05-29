import { Request, Response } from "express";
import { productServices } from "./products.services";
import productInputValidationSchema from "./products.inputvalidate";


//===========Product post controlar with error handle===============
const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body
        //====validated with Zod===========
        const validated = productInputValidationSchema.parse(product)

        const result = await productServices.productCreate(validated)
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })
    } catch (err:any) {
        res.status(500).json({
            success: false,
            message: err.issues[0].message || "Something went wrong to create product",
        })
    }
}


//===========All Products get controlar with error handle===============
const getProductsAllData = async (req: Request, res: Response) => {
    try {
        const search: any = req.query.searchTerm
        const result = await productServices.getProductsData(search)
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong to fetched products",
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
            message: err.issues[0].message || "Something went wrong to fetched single product",
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
            message: err.message || "Something went wrong to delete product",
        })
    }
}

//===========Update a single Product controlar with error handle===============
const updateAproduct = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId
        const producdata = req.body

        //====validated with Zod===========
        const validateData = productInputValidationSchema.parse(producdata)

        const result = await productServices.updateProuct(id, validateData)
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result
        })
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong to update product",
        })
    }
}

export const productControlar = {
    createProduct,
    getProductsAllData,
    getSingleProduct,
    deleteAProduct,
    updateAproduct
}