// src/controllers/common/index.ts

import sendVerifyMailController from './sendVerifyMail';
import comformForInterviewController from './comformForInterview'

export = (dependencies: any) => {
    return {
        sendVerifyMailController: sendVerifyMailController(dependencies),
        comformForInterviewController: comformForInterviewController(dependencies),
    }
}