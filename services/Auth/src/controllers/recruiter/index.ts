import addRecruiterController from './addRecruiter';
import loginRecruiterController from './loginRecruiter';

export = (dependencies: any) => {
    return {
        addRecruiterController: addRecruiterController(dependencies),
        loginRecruiterController: loginRecruiterController(dependencies)
    }
}