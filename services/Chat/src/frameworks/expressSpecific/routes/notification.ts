import express from "express";
import { notificationControllers } from "../../../controllers";
import { DependeniciesData } from "../../../entities/interface";
import middlewares from "../../../middlewares"

export = (dependencies: DependeniciesData) => {
    const router = express.Router();
    const {
        createNotificationController,
        updateNotificationController,
        deleteNotificationController,
        getNotificationController,
        getAllNotificationsController,
        changeStatusNotificationController
    } = notificationControllers(dependencies);
    
    const {
        verifyTokenMiddleWare,
    } = middlewares;

    router.route('/create').post(verifyTokenMiddleWare, createNotificationController);
    router.route('/update/:id').put(verifyTokenMiddleWare, updateNotificationController);
    router.route('/delete/:id').delete(verifyTokenMiddleWare, deleteNotificationController);
    router.route('/get/:id').get(verifyTokenMiddleWare, getNotificationController);
    router.route('/getall').get(verifyTokenMiddleWare, getAllNotificationsController);
    router.route('/changeStatus/:id').put(verifyTokenMiddleWare, changeStatusNotificationController);

    return router;
};