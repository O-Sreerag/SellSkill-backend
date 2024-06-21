import { RoomData } from "../../entities/room";
import { DependeniciesData } from "../../entities/interface";

export const Room_Update_Usecase = (dependencies: DependeniciesData) => {
    const {
        roomRepository
    } = dependencies;

    console.log("Room update use case");

    if (!roomRepository) {
        console.log('The Room repository should exist in dependencies');
    }

    const execute = (id: string, roomData: RoomData) => {
        return roomRepository.update(id, roomData);
    };

    return {
        execute
    };
};
