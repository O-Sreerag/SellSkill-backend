import { MessageData } from "../../entities/room";
import { DependeniciesData } from "../../entities/interface";

export const Message_Create_Usecase = (dependencies: DependeniciesData) => {
    const {
        roomRepository
    } = dependencies;

    console.log("message create use case");

    if (!roomRepository) {
        console.log('The Room repository should exist in dependencies');
    }

    const execute = (id: string, messageData: MessageData) => {
        return roomRepository.createMessage(id, messageData);
    };

    return {
        execute
    };
};
