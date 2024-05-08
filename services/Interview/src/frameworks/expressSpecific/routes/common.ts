// src/frameworks/expressSpecific/routes/common.ts

import express from "express"
import { commonControllers } from '../../../controllers'
import { DependeniciesData } from "../../../entities/interface";
import middlewares from "../../../middlewares";

export = (dependencies: DependeniciesData) => {
    const router = express.Router()
    const {
        sendVerifyMailController,
        comformForInterviewController,
    } = commonControllers(dependencies);
    const {
        verifyTokenMiddleWare,
    } = middlewares;

    router.route('/sendMail').post(sendVerifyMailController)
    router.route('/conform-for-interview').get(comformForInterviewController)

    return router;
}