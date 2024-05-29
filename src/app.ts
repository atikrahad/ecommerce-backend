import express, { Application, Request, Response } from "express"
import cors from "cors"
import { productRoute } from "./app/products/products.route"
import { orderRoute } from "./app/order/order.routes"
const app: Application = express()

app.use(cors())
app.use(express.json())

//==========Api endpoind============
app.use("/api/products", productRoute)
app.use("/api/orders", orderRoute)
app.all("*", (req:Request, res:Response)=>{
    res.status(500).json({
        success:false,
        message: "Route not found"
    })
})

app.get("/", (req: Request, res: Response) => {
    res.send("Products server is running")
})

export default app