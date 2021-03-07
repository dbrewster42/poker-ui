import axios from 'axios';

const url = 'http://localhost:8080';
const headers =    {
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
}

class Service {
    createNewPlayer(body){
        console.log(body, "--------", headers)
        return axios.post(`${url}/register`, body, headers)
    }
    signIn(body){
        console.log(body, "--------", headers)
        return axios.post(`${url}/login`, body, headers)
    }
    addMoney(body){
        console.log(body, "--------", headers)
        return axios.put(`${url}/buyin`, body, headers)
    }
    start(body){
        return axios.post(`${url}/game/`, body, headers)
    }
    deal(gameId, body){
        return axios.post(`${url}/${gameId}`, headers)
    }
}
export default new Service();

// const headers =    {
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       "Access-Control-Allow-Origin": "*"
//     }
// }