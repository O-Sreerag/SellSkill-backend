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
        getAllApplicationsController,
        changeStatusController
    } = applicationControllers(dependencies);
    const {
        verifyTokenMiddleWare,
    } = middlewares;

    router.route('/create').post(verifyTokenMiddleWare, createApplicationController);
    router.route('/update/:id').put(verifyTokenMiddleWare, updateApplicationController);
    router.route('/delete/:id').delete(verifyTokenMiddleWare, deleteApplicationController);
    router.route('/get/:id').get(verifyTokenMiddleWare, getApplicationController);
    router.route('/getall').get(verifyTokenMiddleWare, getAllApplicationsController);
    router.route('/changeStatus').put(verifyTokenMiddleWare, changeStatusController)

    return router;
};