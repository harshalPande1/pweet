
import 'dotenv/config'
import App from "./App"
import userController from './users/controller';

const app = new App(
    [
        new userController()
    ],
    Number(process.env.PORT)
)

app.listen();