import { Request, Response } from "express";
import { orderInputValidate } from "./order.validate";
import { orderServices } from "./order.services";

//===========Order post controlar with error handle===============
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
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.issues[0].message || "Something went wrong to create order!",
        })
    }
}

//===========All order get controlar with error handle===============
const getAllOrders = async (req: Request, res: Response) => {
    try {
        const result = await orderServices.allOrder()
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Something went wrong to fetched orders!",
        })
    }
}

export const orderControlars = {
    createOrder,
    getAllOrders
}