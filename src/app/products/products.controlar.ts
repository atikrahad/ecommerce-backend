import { Request, Response } from "express";

const createProduct = async (req: Request, res: Response) => {
    try {
        const product = req.body
        const result = await productCreateService(product)
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong to create product",
        })
    }
}

export const productControlar = {
    createProduct
}