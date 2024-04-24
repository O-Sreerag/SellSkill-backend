// src/controllers/career/index.ts

import createApplicationController from './createApplication';
import updateApplicationController from './updateApplication';
import deleteApplicationController from './deleteApplication';
import getApplicationController from './getApplication';
import getAllApplicationsController from './getAllApplications';

export = (dependencies: any) => {
    return {
        createApplicationController: createApplicationController(dependencies),
        updateApplicationController: updateApplicationController(dependencies),
        deleteApplicationController: deleteApplicationController(dependencies),
        getApplicationController: getApplicationController(dependencies),
        getAllApplicationsController: getAllApplicationsController(dependencies),

    }
}