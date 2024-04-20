import express from "express"
import { recruiterControllers } from '../../../controllers'
import { DependeniciesData } from "../../../entities/interface";

export = (dependencies: DependeniciesData) => {
    const router = express.Router()
    const {
        addRecruiterController,
        loginRecruiterController
        // getRecruiterByIdController,
        // updateRecruiterController,
        // deleteRecruiterController
    } = recruiterControllers(dependencies);

    router.route('/signup').post(addRecruiterController) //.delete(deleteRecruiterController).put(updateRecruiterController);
    router.route('/login').post(loginRecruiterController)
    // router.route('/:id').get(getRecruiterByIdController);

    return router;
}