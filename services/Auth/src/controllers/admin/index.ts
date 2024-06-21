// src/controllers/admin/index.ts

import loginAdminController from './loginAdmin';

export = (dependencies: any) => {
    return {
        loginAdminController: loginAdminController(dependencies),
    }
}