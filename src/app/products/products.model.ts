import { Schema, model } from 'mongoose'
import { TInventory, TProduct, TVariants } from './products.interface'

//============Variants schema==================

const variantSchema = new Schema<TVariants>({
  type: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
})

//============Inventory schema==================

const inventorySchema = new Schema<TInventory>({
  quantity: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Boolean,
    required: true,
  },
})

//============Product schemaModel==================

const productSchema = new Schema<TProduct>({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [variantSchema],
    required: true,
  },
  inventory: {
    type: inventorySchema,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
})

const product = model<TProduct>('product', productSchema)

export default product
