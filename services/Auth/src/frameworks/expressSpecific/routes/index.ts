import express from 'express';
import recruiterRouter from './recruiter';
import commonRouter from './common';
import { DependeniciesData } from '../../../entities/interface';

export = (dependencies: DependeniciesData) => {
    const routes = express.Router();

    const recruiter = recruiterRouter(dependencies);
    const common = commonRouter(dependencies)

    routes.use('/recruiter', recruiter);
    // routes.use('/applicant', applicant)
    routes.use('/common', common)

    return routes;
}