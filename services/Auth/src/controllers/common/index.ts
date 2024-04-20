import sendVerifyMailController from './sendVerifyMail';
import verifyUserController from './verifyUser'

export = (dependencies: any) => {
    return {
        sendVerifyMailController: sendVerifyMailController(dependencies),
        verifyUserController: verifyUserController(dependencies),
    }
}