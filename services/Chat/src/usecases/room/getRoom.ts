import { DependeniciesData } from "../../entities/interface";

export const Room_Get_Usecase = (dependencies: DependeniciesData) => {
    const {
        roomRepository
    } = dependencies;

    console.log("Room get use case");

    if (!roomRepository) {
        console.log('The Room repository should exist in dependencies');
    }

    const execute = (id: string) => {
        return roomRepository.get(id);
    };

    return {
        execute
    };
};
