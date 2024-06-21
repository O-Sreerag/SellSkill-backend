import express from "express";
import { roomControllers } from "../../../controllers";
import { DependeniciesData } from "../../../entities/interface";
import middlewares from "../../../middlewares"

export = (dependencies: DependeniciesData) => {
    const router = express.Router();
    const {
        createRoomController,
        updateRoomController,
        deleteRoomController,
        getRoomController,
        getAllRoomsController,
        createMessageController
    } = roomControllers(dependencies);
    
    const {
        verifyTokenMiddleWare,
    } = middlewares;

    router.route('/create').post(verifyTokenMiddleWare, createRoomController);
    router.route('/update/:id').put(verifyTokenMiddleWare, updateRoomController);
    router.route('/delete/:id').delete(verifyTokenMiddleWare, deleteRoomController);
    router.route('/get/:id').get(verifyTokenMiddleWare, getRoomController);
    router.route('/getall').get(verifyTokenMiddleWare, getAllRoomsController);
    router.route('/newMessage').post(verifyTokenMiddleWare, createMessageController);

    return router;
};