import { TProduct } from "./products.interface"
import product from "./products.model"

const productCreate = async (productData: TProduct) => {
    const addproduct = new product(productData)
    const result = await addproduct.save()
    return result
}

export const productServices = {
    productCreate
}