import express, { Application, Request, Response } from "express"
import cors from "cors"
import { productRoute } from "./app/products/products.route"
const app: Application = express()

app.use(cors())
app.use(express.json())

app.use("/api/products", productRoute)

app.get("/", (req: Request, res: Response) => {
    res.send("Products server is running")
})

export default app