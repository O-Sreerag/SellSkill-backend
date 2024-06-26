// src/frameworks/expressSpecific/routes/index.ts

import express from 'express';

import { DependeniciesData } from '../../../entities/interface'

import adminRouter from './admin';
import recruiterRouter from './recruiter';
import commonRouter from './common';
import applicantRouter from './applicant';

export = (dependencies: DependeniciesData) => {
    const routes = express.Router();

    const recruiter = recruiterRouter(dependencies)
    const common = commonRouter(dependencies)
    const applicant = applicantRouter(dependencies)
    const admin = adminRouter(dependencies)

    routes.use('/admin', admin);
    routes.use('/recruiter', recruiter);
    routes.use('/applicant', applicant);
    routes.use('/common', common)

    return routes;
}