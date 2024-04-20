// import { RecruiterData, Recruiter } from "../entities/recruiter";
// import { DependeniciesData } from "../entities/interface";

// export const Signup_Usecase = (dependencies: DependeniciesData) => {
//     const {
//         repositories:{
//             recruiterRepository
//         }
//     } = dependencies

//     if(!recruiterRepository) {
//         throw new Error('The recruiter repository should exist in dependencies')
//     }

//     const execute = ({
//         email,
//     }: RecruiterData) => {
//         return recruiterRepository.getBy_Email(email)
//     }
//     return {
//         execute
//     }
// }