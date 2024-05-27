import { TProduct } from "./products.interface"
import product from "./products.model"

//===========product post services with mongoose query===============
const productCreate = async (productData: TProduct) => {
    const addproduct = new product(productData)
    const result = await addproduct.save()
    return result
}

//===========All products get services with mongoose query===============
const getProductsData = async () => {
    const result = await product.find({ isDeleted: { $ne: true } })
    return result
}

//===========All products get services with mongoose query===============
const singleproduct = async (id: string) => {
    const result = product.findOne({ _id: id, isDeleted: { $ne: true } })
    return result
}

//============delete a product services with mongoose query==============
const deleteProduct = async (id: string) => {
    const result = await product.findOneAndUpdate(
        { _id: id },
        {
            $set: {
                isDeleted: true
            }
        },
        {
            new: true
        }
    )
    return result
}

export const productServices = {
    productCreate,
    getProductsData,
    singleproduct,
    deleteProduct
}