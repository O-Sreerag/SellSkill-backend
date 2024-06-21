import express from "express";
import { interviewControllers } from "../../../controllers";
import { DependeniciesData } from "../../../entities/interface";
import middlewares from "../../../middlewares"

export = (dependencies: DependeniciesData) => {
    const router = express.Router();
    const {
        createInterviewController,
        updateInterviewController,
        deleteInterviewController,
        getInterviewController,
        getAllInterviewsController,
        getAllFromEmailcontroller,
    } = interviewControllers(dependencies);

    const {
        verifyTokenMiddleWare,
    } = middlewares;

    router.route('/create').post(verifyTokenMiddleWare, createInterviewController);
    router.route('/update/:id').put(verifyTokenMiddleWare, updateInterviewController);
    router.route('/delete/:id').delete(verifyTokenMiddleWare, deleteInterviewController);
    router.route('/get/:id').get(verifyTokenMiddleWare, getInterviewController);
    router.route('/getall').get(verifyTokenMiddleWare, getAllInterviewsController);
    router.route('/getallFromEmail').get(verifyTokenMiddleWare, getAllFromEmailcontroller);

    return router;
};