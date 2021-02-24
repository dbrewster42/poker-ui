import axios from 'axios';

const url = 'http://localhost:8080';

class Service {
    createNewPlayer(body, headers){
        return axios.post(`${url}/login`, body, headers)
    }
}
export default new Service();