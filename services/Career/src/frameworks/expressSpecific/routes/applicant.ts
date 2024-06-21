import express from "express";
import { applicantControllers } from "../../../controllers";
import { DependeniciesData } from "../../../entities/interface";
import middlewares from "../../../middlewares"

export = (dependencies: DependeniciesData) => {
    const router = express.Router();
    const {
        AddCareerController,
        UpdateCareerStatusController
    } = applicantControllers(dependencies);
    const {
        verifyTokenMiddleWare,
    } = middlewares;

    router.route('/add').post(verifyTokenMiddleWare, AddCareerController);
    router.route('/update').put(verifyTokenMiddleWare, UpdateCareerStatusController);

    return router;
};