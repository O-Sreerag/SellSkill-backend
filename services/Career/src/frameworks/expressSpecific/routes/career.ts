import express from "express";
import { careerControllers } from "../../../controllers";
import { DependeniciesData } from "../../../entities/interface";

export = (dependencies: DependeniciesData) => {
    const router = express.Router();
    const {
        createCareerController,
        updateCareerController,
        deleteCareerController,
        getCareerController,
        getAllCareersController
    } = careerControllers(dependencies);

    router.route('/create').post(createCareerController);
    router.route('/update/:id').put(updateCareerController);
    router.route('/delete/:id').delete(deleteCareerController);
    router.route('/get/:id').get(getCareerController);
    router.route('/getall').get(getAllCareersController);

    return router;
};