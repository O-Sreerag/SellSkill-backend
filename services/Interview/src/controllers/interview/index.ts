// src/controllers/interview/index.ts

import createInterviewController from './createInterview';
import updateInterviewController from './updateInterview';
import deleteInterviewController from './deleteInterview';
import getInterviewController from './getInterview';
import getAllInterviewsController from './getAllInterviews';
import getAllFromEmailcontroller from './getAllFromEmail';

export = (dependencies: any) => {
    return {
        createInterviewController: createInterviewController(dependencies),
        updateInterviewController: updateInterviewController(dependencies),
        deleteInterviewController: deleteInterviewController(dependencies),
        getInterviewController: getInterviewController(dependencies),
        getAllInterviewsController: getAllInterviewsController(dependencies),
        getAllFromEmailcontroller: getAllFromEmailcontroller(dependencies),
    }
}