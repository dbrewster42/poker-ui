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
    startGame(body){
        return axios.post(`${url}/game/`, body, headers)
    }
    newDeal(gameId){
        return axios.get(`${url}/game/${gameId}/new-deal`, headers)
    }
    deal(gameId, body){
        return axios.post(`${url}/game/${gameId}`, headers)
    }
    getBetOptions(gameId){
        return axios.get(`${url}/game/${gameId}/bet`, headers)
    }
    bet(gameId, body){
        return axios.post(`${url}/game/${gameId}`, body, headers)
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