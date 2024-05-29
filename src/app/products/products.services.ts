import { TProduct } from './products.interface'
import product from './products.model'

//===========product post services with mongoose query===============
const productCreate = async (productData: TProduct) => {
  const addproduct = new product(productData)
  const result = await addproduct.save()
  return result
}

//===========All products get services with mongoose query===============
const getProductsData = async (query: string) => {
  if (query) {
    const result = await product.find({
      isDeleted: { $ne: true },
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
      ],
    })
    return result
  } else {
    const result = await product.find({
      isDeleted: { $ne: true },
    })
    return result
  }
}

//===========All products get services with mongoose query===============
const singleproduct = async (id: string | undefined) => {
  const result = product.findOne({ _id: id, isDeleted: { $ne: true } })
  return result
}

//============delete a product services with mongoose query==============
const deleteProduct = async (id: string) => {
  const result = await product.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        isDeleted: true,
      },
    },
    {
      new: true,
    },
  )
  return result
}

//============Update a product services with mongoose query==============
const updateProuct = async (id: string, updateData: TProduct) => {
  const result = await product.findByIdAndUpdate({ _id: id }, updateData, {
    new: true,
  })
  return result
}
export const productServices = {
  productCreate,
  getProductsData,
  singleproduct,
  deleteProduct,
  updateProuct,
}
