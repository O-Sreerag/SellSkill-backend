// src/controllers/applicant/index.ts

import addApplicantController from './addApplicant';

export = (dependencies: any) => {
    return {
        addApplicantController: addApplicantController(dependencies),
    }
}