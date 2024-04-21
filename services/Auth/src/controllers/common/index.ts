// src/controllers/common/index.ts

import sendVerifyMailController from './sendVerifyMail';
import verifyUserController from './verifyUser'
import loginUser from './loginUser'

export = (dependencies: any) => {
    return {
        sendVerifyMailController: sendVerifyMailController(dependencies),
        verifyUserController: verifyUserController(dependencies),
        loginUserController: loginUser(dependencies)
    }
}