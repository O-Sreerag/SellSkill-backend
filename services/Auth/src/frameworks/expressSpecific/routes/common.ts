// src/frameworks/expressSpecific/routes/common.ts

import express from "express"
import { commonControllers } from '../../../controllers'
import { DependeniciesData } from "../../../entities/interface";

export = (dependencies: DependeniciesData) => {
    const router = express.Router()
    const {
        sendVerifyMailController,
        verifyUserController,
        loginUserController,
    } = commonControllers(dependencies);

    router.route('/sendMail').post(sendVerifyMailController)
    router.route('/verify-user').get(verifyUserController)
    router.route('/login').post(loginUserController)

    return router;
}