import express from "express";
import { interviewControllers } from "../../../controllers";
import { DependeniciesData } from "../../../entities/interface";

export = (dependencies: DependeniciesData) => {
    const router = express.Router();
    const {
        createInterviewController,
        updateInterviewController,
        deleteInterviewController,
        getInterviewController,
        getAllInterviewsController
    } = interviewControllers(dependencies);

    router.route('/create').post(createInterviewController);
    router.route('/update/:id').put(updateInterviewController);
    router.route('/delete/:id').delete(deleteInterviewController);
    router.route('/get/:id').get(getInterviewController);
    router.route('/getall').get(getAllInterviewsController);

    return router;
};