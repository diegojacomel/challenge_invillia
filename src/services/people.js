// Api
import Api from '../utils/api';

/* Service */
class PeopleService {
    static getPeople() {
        return Api.get(`people`);
    }
}

export default PeopleService;