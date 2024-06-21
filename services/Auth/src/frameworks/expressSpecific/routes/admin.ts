// src/frameworks/expressSpecific/routes/admin.ts

import express from "express"
import { adminControllers } from '../../../controllers'
import { DependeniciesData } from "../../../entities/interface";

export = (dependencies: DependeniciesData) => {
    const router = express.Router()
    const {
        loginAdminController,
    } = adminControllers(dependencies);

    router.route('/login').post(loginAdminController)

    return router;
}