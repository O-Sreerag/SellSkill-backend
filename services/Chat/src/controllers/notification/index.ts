// src/controllers/career/index.ts

import createNotificationController from './createNotification';
import updateNotificationController from './updateNotification';
import deleteNotificationController from './deleteNotification';
import getNotificationController from './getNotification';
import getAllNotificationsController from './getAllNotifications';
import changeStatusNotificationController from './changeStatus';

export = (dependencies: any) => {
    return {
        createNotificationController: createNotificationController(dependencies),
        updateNotificationController: updateNotificationController(dependencies),
        deleteNotificationController: deleteNotificationController(dependencies),
        getNotificationController: getNotificationController(dependencies),
        getAllNotificationsController: getAllNotificationsController(dependencies),
        changeStatusNotificationController: changeStatusNotificationController(dependencies),
    }
}