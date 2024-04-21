// src/controllers/recruiter/index.ts

import addRecruiterController from './addRecruiter';

export = (dependencies: any) => {
    return {
        addRecruiterController: addRecruiterController(dependencies),
    }
}