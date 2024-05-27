import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";

const main = async () => {
    try {
        await mongoose.connect(config.database as string)

        app.listen(config.port, () => {
            console.log("Server is running with", config.port)
        })
    } catch (err) {
        console.log(err)
    }
}

main()