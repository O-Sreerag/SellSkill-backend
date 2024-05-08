import express from "express";
import { applicationControllers } from "../../../controllers";
import { DependeniciesData } from "../../../entities/interface";
import middlewares from "../../../middlewares"

export = (dependencies: DependeniciesData) => {
    const router = express.Router();
    const {
        createApplicationController,
        updateApplicationController,
        deleteApplicationController,
        getApplicationController,
        getAllApplicationsController
    } = applicationControllers(dependencies);
    const {
        verifyTokenMiddleWare,
    } = middlewares;

    router.route('/create').post(verifyTokenMiddleWare, createApplicationController);
    router.route('/update/:id').put(updateApplicationController);
    router.route('/delete/:id').delete(deleteApplicationController);
    router.route('/get/:id').get(getApplicationController);
    router.route('/getall').get(getAllApplicationsController);

    return router;
};