import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import bodyParser from "body-parser";
import iController from "./utils/interface/controller";
class App {
    private app = express()
    private port
    constructor(controllers: iController[], port: number) {
        this.port = port



        this.dbInit();
        this.middlewaresInit();
        this.initConteoller(controllers);
    }


    public initConteoller = (controllers: iController[]) => {
        controllers.forEach((controller: iController) => {
            this.app.use("/api", controller.router)
        })

    }
    public middlewaresInit = () => {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
    public dbInit = () => {
        mongoose.connect("mongodb://127.0.0.1:27017/pweetApp")
            .then(() => console.log("db connected"))
    }
    public listen = () => {
        this.app.listen(this.port, () => {
            console.log(`server running on port number ${this.port}`)
        })
    }

}

export default App