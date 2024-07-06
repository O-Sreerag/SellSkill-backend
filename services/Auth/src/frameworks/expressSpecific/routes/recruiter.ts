// src/frameworks/expressSpecific/routes/recruiter.ts

import express from "express"
import { recruiterControllers } from '../../../controllers'
import { DependeniciesData } from "../../../entities/interface";
import middlewares from "../../../middlewares";

export = (dependencies: DependeniciesData) => {
    const router = express.Router()
    const {
        addRecruiterController,
        RecruitersGetAllContoller,
        RecruiterBlockController,
        RecruiterGetController,
        RecruiterUpdateController,
        RecruiterGetProfileController,
        RecruiterCheckBlockStatusController,
    } = recruiterControllers(dependencies);

    const {
        verifyAdminTokenMiddleWare,
        verifyTokenMiddleWare,
    } = middlewares;

    router.route('/signup').post(addRecruiterController) //.delete(deleteRecruiterController).put(updateRecruiterController);
    router.route('/get').get(verifyTokenMiddleWare, RecruiterGetController)
    router.route('/update').post(verifyTokenMiddleWare, RecruiterUpdateController)
    router.route('/getProfile').get(verifyAdminTokenMiddleWare, RecruiterGetProfileController)
    router.route('/getAll').get(verifyAdminTokenMiddleWare, RecruitersGetAllContoller)
    router.route('/block').get(verifyAdminTokenMiddleWare, RecruiterBlockController)
    router.route('/checkBlock').get(RecruiterCheckBlockStatusController)

    return router;
}