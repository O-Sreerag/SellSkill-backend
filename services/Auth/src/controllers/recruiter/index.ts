// src/controllers/recruiter/index.ts

import addRecruiterController from './addRecruiter';
import RecruitersGetAllContoller from './getAllRecruiters'
import RecruiterBlockController from './blockRecruiter'
import RecruiterGetController from './getRecruiter'
import RecruiterUpdateController from './updateRecruiter'
import RecruiterGetProfileController from './getRecruiterProfile' 

export = (dependencies: any) => {
    return {
        addRecruiterController: addRecruiterController(dependencies),
        RecruitersGetAllContoller: RecruitersGetAllContoller(dependencies),
        RecruiterBlockController: RecruiterBlockController(dependencies),
        RecruiterGetController: RecruiterGetController(dependencies),
        RecruiterUpdateController: RecruiterUpdateController(dependencies),
        RecruiterGetProfileController: RecruiterGetProfileController(dependencies),
    }
}