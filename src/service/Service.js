import axios from 'axios';

const url = 'http://localhost:8080';
const headers =    {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  }

class Service {
    createNewPlayer(body){
        console.log(body, "--------", headers)
        return axios.post(`${url}/login`, body, headers)
    }
}
export default new Service();