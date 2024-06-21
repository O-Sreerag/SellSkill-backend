// src/frameworks/expressSpecific/routes/applicant.ts

import express from "express"
import { applicantControllers } from '../../../controllers'
import { DependeniciesData } from "../../../entities/interface";
import middlewares from "../../../middlewares";

export = (dependencies: DependeniciesData) => {
    const router = express.Router()
    const {
        addApplicantController,
        ApplicantsGetAllContoller,
        ApplicantBlockController,
        ApplicantGetController,
    } = applicantControllers(dependencies);

    const {
        verifyAdminTokenMiddleWare,
        verifyTokenMiddleWare,
    } = middlewares;

    router.route('/signup').post(addApplicantController) //.delete(deleteApplicantController).put(updateApplicantController);
    router.route('/get').get(verifyTokenMiddleWare, ApplicantGetController)
    // router.route('/:id').get(getApplicantByIdController);
    router.route('/getAll').get(verifyAdminTokenMiddleWare, ApplicantsGetAllContoller)
    router.route('/block').get(verifyAdminTokenMiddleWare, ApplicantBlockController)

    return router;
}