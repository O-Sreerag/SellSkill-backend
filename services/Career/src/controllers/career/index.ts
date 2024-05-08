// src/controllers/career/index.ts

import createCareerController from './createCareer';
import updateCareerController from './updateCareer';
import deleteCareerController from './deleteCareer';
import getCareerController from './getCareer';
import getAllCareersController from './getAllCareers';
import getApplicantsController from './getApplicants';

export = (dependencies: any) => {
    return {
        createCareerController: createCareerController(dependencies),
        updateCareerController: updateCareerController(dependencies),
        deleteCareerController: deleteCareerController(dependencies),
        getCareerController: getCareerController(dependencies),
        getAllCareersController: getAllCareersController(dependencies),
        getApplicantsController: getApplicantsController(dependencies),
    }
}