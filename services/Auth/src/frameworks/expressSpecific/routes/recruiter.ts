// src/frameworks/expressSpecific/routes/recruiter.ts

import express from "express"
import { recruiterControllers } from '../../../controllers'
import { DependeniciesData } from "../../../entities/interface";

export = (dependencies: DependeniciesData) => {
    const router = express.Router()
    const {
        addRecruiterController,
    } = recruiterControllers(dependencies);

    router.route('/signup').post(addRecruiterController) //.delete(deleteRecruiterController).put(updateRecruiterController);
    // router.route('/:id').get(getRecruiterByIdController);

    return router;
}