import { DependeniciesData } from "../../entities/interface";

export const Room_GetAll_Usecase = (dependencies: DependeniciesData) => {
    const {
        roomRepository
    } = dependencies;

    console.log("Room get all use case");

    if (!roomRepository) {
        console.log('The Room repository should exist in dependencies');
    }

    const execute = (userId: string) => {
        return roomRepository.getAll(userId);
    };

    return {
        execute
    };
};
