// src/frameworks/expressSpecific/routes/index.ts

import express from 'express';
import { DependeniciesData } from '../../../entities/interface'

import interviewRouter from './interview';
import commonRouter from './common';

export = (dependencies: DependeniciesData) => {
    const routes = express.Router();

    const common = commonRouter(dependencies)
    const interview = interviewRouter(dependencies)

    routes.use('/', interview);
    routes.use('/common', common);

    return routes;
}