import usecases from '../usecases';
import repositories from '../frameworks/repositories/mongo';

export = {
    usecases,
    ...repositories
}