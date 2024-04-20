import addApplicantController from './addApplicant';
import loginApplicantController from './loginApplicant';

export = (dependencies: any) => {
    return {
        addApplicantController: addApplicantController(dependencies),
        loginApplicantController: loginApplicantController(dependencies)
    }
}