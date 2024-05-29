import product from '../products/products.model'
import { TOrder } from './order.interface'
import order from './order.model'

//============Order create services with mongoose query==============
const createOrderservices = async (orderData: TOrder) => {
  const productData = await product.findOne({ _id: orderData.productId })
  const productQuantity: any = productData?.inventory.quantity
  const newQuantity = productQuantity - orderData.quantity

  //==========update product inventory==========
  if (newQuantity == 0) {
    await product.findOneAndUpdate(
      { _id: orderData.productId },
      {
        $set: {
          'inventory.inStock': false,
          'inventory.quantity': newQuantity,
        },
      },
      {
        new: true,
      },
    )
    //========== create a order ============
    const result = await order.create(orderData)

    return result
  } else if (newQuantity > 0) {
    await product.findOneAndUpdate(
      { _id: orderData.productId },
      {
        $set: {
          'inventory.quantity': newQuantity,
        },
      },
      {
        new: true,
      },
    )
    //========== create a order ============
    const result = await order.create(orderData)

    return result
  } else {
    throw new Error('Insufficient quantity available in inventory')
  }
}

//============Get all orders services with mongoose query==============
const allOrder = async (email: string | undefined) => {
  if (email) {
    const result = await order.find({ email: email })

    if (result.length === 0) {
      throw new Error('Order not found')
    }
    return result
  } else {
    const result = await order.find()
    if (result.length === 0) {
      throw new Error('Order not found')
    }
    return result
  }
}

export const orderServices = {
  createOrderservices,
  allOrder,
}
