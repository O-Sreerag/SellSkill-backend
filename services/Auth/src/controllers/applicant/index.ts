// src/controllers/applicant/index.ts

import addApplicantController from './addApplicant';
import ApplicantsGetAllContoller from './getAllApplicants'
import ApplicantBlockController from './blockApplicant'
import ApplicantGetController from './getApplicant'

export = (dependencies: any) => {
    return {
        addApplicantController: addApplicantController(dependencies), 
        ApplicantsGetAllContoller: ApplicantsGetAllContoller(dependencies), 
        ApplicantBlockController: ApplicantBlockController(dependencies),
        ApplicantGetController: ApplicantGetController(dependencies),
    }
}