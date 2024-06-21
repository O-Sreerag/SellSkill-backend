import { DependeniciesData } from "../../entities/interface";

export const Room_Delete_Usecase = (dependencies: DependeniciesData) => {
    const {
        roomRepository
    } = dependencies;

    console.log("Room delete use case");

    if (!roomRepository) {
        console.log('The Room repository should exist in dependencies');
    }

    const execute = (id: string) => {
        return roomRepository.delete(id);
    };

    return {
        execute
    };
};
