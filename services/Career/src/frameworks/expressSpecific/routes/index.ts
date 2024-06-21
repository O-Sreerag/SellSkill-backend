// src/frameworks/expressSpecific/routes/index.ts

import express from 'express';
import { DependeniciesData } from '../../../entities/interface'

import careerRouter from './career';
import applicationRounter from './application';
import applicantRouter from './applicant';

export = (dependencies: DependeniciesData) => {
    const routes = express.Router();

    const career = careerRouter(dependencies)
    const application = applicationRounter(dependencies)
    const applicant = applicantRouter(dependencies)

    routes.use('/', career);
    routes.use('/application', application);
    routes.use('/applicant', applicant);

    return routes;
}