// Room_Create_Usecase

import { RoomData, Room } from "../../entities/room";
import { DependeniciesData } from "../../entities/interface";

export const Room_Create_Usecase = (dependencies: DependeniciesData) => {
    const {
        roomRepository
    } = dependencies;
    console.log("Room add use case");

    if (!roomRepository) {
        console.log('The Room repository should exist in dependencies');
    }

    const execute = (roomData: RoomData) => {
        const room = new Room(roomData);
        return roomRepository.create(room);
    };
    return {
        execute
    };
};
