// Api
import Api from '../utils/api';

/* Service */
class PeopleService {
    static getPeople(page) {
        return Api.get(`people${page ? `/?page=${page}` : ""}`);
    }
}

export default PeopleService;