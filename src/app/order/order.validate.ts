import { z } from "zod";

export const orderInputValidate = z.object({
    email: z.string().email().min(5, { message: "Must followed email formate" }),
    productId: z.string(),
    price: z.number().positive({ message: "Price must positive number" }),
    quantity: z.number().min(1, { message: "Quantity number is required" })
})