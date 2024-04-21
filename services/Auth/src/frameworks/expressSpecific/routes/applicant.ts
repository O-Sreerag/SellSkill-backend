// src/frameworks/expressSpecific/routes/applicant.ts

import express from "express"
import { applicantControllers } from '../../../controllers'
import { DependeniciesData } from "../../../entities/interface";

export = (dependencies: DependeniciesData) => {
    const router = express.Router()
    const {
        addApplicantController,
    } = applicantControllers(dependencies);

    router.route('/signup').post(addApplicantController) //.delete(deleteApplicantController).put(updateApplicantController);
    // router.route('/:id').get(getApplicantByIdController);

    return router;
}