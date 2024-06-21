// src/frameworks/expressSpecific/routes/index.ts

import express from 'express';
import { DependeniciesData } from '../../../entities/interface'

import roomRouter from './room';
import notificationRouter from './notification';

export = (dependencies: DependeniciesData) => {
    const routes = express.Router();

    const room = roomRouter(dependencies)
    const notification = notificationRouter(dependencies)

    routes.use('/room', room);
    routes.use('/notification', notification);

    return routes;
}