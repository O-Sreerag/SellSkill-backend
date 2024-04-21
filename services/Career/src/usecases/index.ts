// src/usecases/index.ts

import { Career_Create_Usecase } from "./career/createCareer";
import { Career_Delete_Usecase } from "./career/deleteCareer";
import { Career_Update_Usecase } from "./career/updateCareer";
import { Career_Get_Usecase } from "./career/getCareer";
import { Career_GetAll_Usecase } from "./career/getAllCareers";

export default {
    Career_Create_Usecase,
    Career_Update_Usecase,
    Career_Delete_Usecase,
    Career_Get_Usecase,
    Career_GetAll_Usecase
}