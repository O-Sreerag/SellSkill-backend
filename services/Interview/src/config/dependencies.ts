import usecases from '../usecases';
import repositories from '../frameworks/repositories/mongo';

console.log("reposotories:", repositories)

export = {
    usecases,
    ...repositories
}