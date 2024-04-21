// src/frameworks/expressSpecific/routes/index.ts

import express from 'express';

import { DependeniciesData } from '../../../entities/interface'

import careerRouter from './career';

export = (dependencies: DependeniciesData) => {
    const routes = express.Router();

    const career = careerRouter(dependencies)

    routes.use('/', career);

    return routes;
}