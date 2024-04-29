// src/frameworks/expressSpecific/routes/index.ts

import express from 'express';
import { DependeniciesData } from '../../../entities/interface'

import interviewRouter from './interview';

export = (dependencies: DependeniciesData) => {
    const routes = express.Router();

    const interview = interviewRouter(dependencies)

    routes.use('/', interview);

    return routes;
}