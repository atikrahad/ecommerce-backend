import { TProduct } from "./products.interface"
import product from "./products.model"

//===========product post services with mongoose query===============
const productCreate = async (productData: TProduct) => {
    const addproduct = new product(productData)
    const result = await addproduct.save()
    return result
}

//===========All products get services with mongoose query===============
const getProductsData = async ()=>{
    const result = await product.find()
    return result
}


export const productServices = {
    productCreate,
    getProductsData
}