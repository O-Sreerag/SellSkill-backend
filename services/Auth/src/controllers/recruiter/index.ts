// src/controllers/recruiter/index.ts

import addRecruiterController from './addRecruiter';
import RecruitersGetAllContoller from './getAllRecruiters'
import RecruiterBlockController from './blockRecruiter'
import RecruiterGetController from './getRecruiter'

export = (dependencies: any) => {
    return {
        addRecruiterController: addRecruiterController(dependencies),
        RecruitersGetAllContoller: RecruitersGetAllContoller(dependencies),
        RecruiterBlockController: RecruiterBlockController(dependencies),
        RecruiterGetController: RecruiterGetController(dependencies)
    }
}