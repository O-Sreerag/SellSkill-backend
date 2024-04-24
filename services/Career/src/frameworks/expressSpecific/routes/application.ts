import express from "express";
import { applicationControllers } from "../../../controllers";
import { DependeniciesData } from "../../../entities/interface";

export = (dependencies: DependeniciesData) => {
    const router = express.Router();
    const {
        createApplicationController,
        updateApplicationController,
        deleteApplicationController,
        getApplicationController,
        getAllApplicationsController
    } = applicationControllers(dependencies);

    router.route('/create').post(createApplicationController);
    router.route('/update/:id').put(updateApplicationController);
    router.route('/delete/:id').delete(deleteApplicationController);
    router.route('/get/:id').get(getApplicationController);
    router.route('/getall').get(getAllApplicationsController);

    return router;
};