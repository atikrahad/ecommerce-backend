import { z } from "zod";

//==========variants input validation with zod============
const variantInputValidationSchema = z.object({
    type: z.string().min(1),
    value: z.string().min(1)
});

//==========inventory input validation with zod============
const inventoryInputValidationSchema = z.object({
    quantity: z.number().min(0, {message:"Quantity number is required"}),
    inStock: z.boolean()
});


//==========products input validation with zod============
const productInputValidationSchema = z.object({
    name: z.string().min(1,{message: "Product name minimum 1 character"}),
    description: z.string().min(1,{message: "Description name minimum 1 character"}),
    price: z.number().positive({message: "Price must positive number"}),
    category: z.string().min(1,{message: "Category name minimum 1 character"}),
    tags: z.array(z.string().min(1, {message: "Tags name minimum 1 character"})).min(1,{message:"Tags array must contain at least 1 (string)element"}),
    variants: z.array(variantInputValidationSchema).min(1, {message: "Variants array must have product variant object"}),
    inventory: inventoryInputValidationSchema,
    isDeleted :z.boolean().optional()
});

export default productInputValidationSchema