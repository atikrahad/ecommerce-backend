import { Request, Response } from "express";
import { orderInputValidate } from "./order.validate";
import { orderServices } from "./order.services";
import { z } from "zod";

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
            message: err.message || err.issues[0].message,
        })
    }
}

//===========All order get controlar with error handle===============
const getAllOrders = async (req: Request, res: Response) => {
    try {
        const email = req.query.email
        if (email) {

            const validateEmail = z.string().email({ message: "Email type is not valid" })
            const validemail = validateEmail.parse(email)
            const result = await orderServices.allOrder(validemail)
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: result
            })
        }
        else {
            const result = await orderServices.allOrder(email)
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: result
            })
        }

    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: err.issues ? err.issues[0].message : err.message,
        })
    }
}

export const orderControlars = {
    createOrder,
    getAllOrders,
}