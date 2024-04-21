import { CareerData } from "./career";

export interface DependeniciesData {
    usecases: usecaseData;
    careerRepository: {
        create: (careerData: CareerData) => Promise<any>;
        update: (id: string, careerData: CareerData) => Promise<any>;
        delete: (id: string) => Promise<any>;
        get: (id: string) => Promise<any>;
        getAll: () => Promise<any>;
    };
}

export interface usecaseData {
    Career_Create_Usecase: (dependencies: DependeniciesData) => {
        execute: (careerData: CareerData) => Promise<any>;
    };
    Career_Update_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string, careerData: CareerData) => Promise<any>;
    };
    Career_Delete_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string) => Promise<any>;
    };
    Career_Get_Usecase: (dependencies: DependeniciesData) => {
        execute: (id: string) => Promise<any>;
    };
    Career_GetAll_Usecase: (dependencies: DependeniciesData) => {
        execute: () => Promise<any>;
    };
}
