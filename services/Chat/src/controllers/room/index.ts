// src/controllers/career/index.ts

import createRoomController from './createRoom';
import updateRoomController from './updateRoom';
import deleteRoomController from './deleteRoom';
import getRoomController from './getRoom';
import getAllRoomsController from './getAllRooms';
import createMessageController from './createMessage'

export = (dependencies: any) => {
    return {
        createRoomController: createRoomController(dependencies),
        updateRoomController: updateRoomController(dependencies),
        deleteRoomController: deleteRoomController(dependencies),
        getRoomController: getRoomController(dependencies),
        getAllRoomsController: getAllRoomsController(dependencies),
        createMessageController: createMessageController(dependencies),
    }
}