import express from "express"
import { commonControllers } from '../../../controllers'
import { DependeniciesData } from "../../../entities/interface";

export = (dependencies: DependeniciesData) => {
    const router = express.Router()
    const {
        sendVerifyMailController,
        verifyUserController
    } = commonControllers(dependencies);

    router.route('/sendMail').post(sendVerifyMailController)
    router.route('/verify-user').get(verifyUserController)

    return router;
}