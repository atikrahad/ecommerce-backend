import product from "../products/products.model";
import { TOrder } from "./order.interface";
import order from "./order.model";

//============Order create services with mongoose query==============
const createOrderservices = async (orderData: TOrder) => {

    const productData = await product.findOne({ _id: orderData.productId })
    const productQuantity: any = productData?.inventory.quantity
    const newQuantity = productQuantity - orderData.quantity

    if (newQuantity <= 0) {
        await product.findOneAndUpdate(
            { _id: orderData.productId },
            {
                $set: {
                    "inventory.inStock": false,
                    "inventory.quantity": newQuantity
                }
            },
            {
                new: true
            }
        )
    } else {
        await product.findOneAndUpdate(
            { _id: orderData.productId },
            {
                $set: {
                    "inventory.quantity": newQuantity
                }
            },
            {
                new: true
            }
        )
    }


    const result = await order.create(orderData)

    return result
}


//============Get all order services with mongoose query==============
const allOrder = async ()=>{
    const result = await order.find()
    return result
}

export const orderServices = {
    createOrderservices,
    allOrder
}