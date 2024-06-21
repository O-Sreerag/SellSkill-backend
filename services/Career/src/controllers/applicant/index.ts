// src/controllers/career/index.ts

import AddCareerController from './addCareer';
import UpdateCareerStatusController from './updateCareerStatus';

export = (dependencies: any) => {
    return {
        AddCareerController: AddCareerController(dependencies),
        UpdateCareerStatusController: UpdateCareerStatusController(dependencies),
    }
}