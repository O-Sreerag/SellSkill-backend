import express from "express";
import { careerControllers } from "../../../controllers";
import { DependeniciesData } from "../../../entities/interface";
import middlewares from "../../../middlewares"

export = (dependencies: DependeniciesData) => {
    const router = express.Router();
    const {
        createCareerController,
        updateCareerController,
        deleteCareerController,
        getCareerController,
        getAllCareersController,
        getApplicantsController,
    } = careerControllers(dependencies);
    
    const {
        verifyTokenMiddleWare,
    } = middlewares;

    router.route('/create').post(verifyTokenMiddleWare, createCareerController);
    router.route('/update/:id').put(verifyTokenMiddleWare, updateCareerController);
    router.route('/delete/:id').delete(verifyTokenMiddleWare, deleteCareerController);
    router.route('/get/:id').get(verifyTokenMiddleWare, getCareerController);
    router.route('/getall').get(verifyTokenMiddleWare, getAllCareersController);
    router.route('/getApplicants/:id').get(verifyTokenMiddleWare, getApplicantsController);

    return router;
};