import { Request, Response } from "express";
import { orderInputValidate } from "./order.validate";
import { orderServices } from "./order.services";

const createOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body
        const validatedOrder = orderInputValidate.parse(orderData)
        const result = await orderServices.createOrderservices(validatedOrder)
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong to create order!",
        })
    }
}

export const orderControlars = {
    createOrder
}