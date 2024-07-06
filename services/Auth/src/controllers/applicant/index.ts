// src/controllers/applicant/index.ts

import addApplicantController from './addApplicant';
import ApplicantsGetAllContoller from './getAllApplicants'
import ApplicantBlockController from './blockApplicant'
import ApplicantGetController from './getApplicant'
import ApplicatUpdateController from './updateApplicant'
import ApplicantGetByIdsController from './getByIds'
import ApplicantCheckBlockStatusController from './checkBlockStatus'

export = (dependencies: any) => {
    return {
        addApplicantController: addApplicantController(dependencies), 
        ApplicantsGetAllContoller: ApplicantsGetAllContoller(dependencies), 
        ApplicantBlockController: ApplicantBlockController(dependencies),
        ApplicantGetController: ApplicantGetController(dependencies),
        ApplicatUpdateController: ApplicatUpdateController(dependencies),
        ApplicantGetByIdsController: ApplicantGetByIdsController(dependencies),
        ApplicantCheckBlockStatusController: ApplicantCheckBlockStatusController(dependencies),
    }
}