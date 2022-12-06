import axios, {AxiosInstance} from "axios";

class Http {
    instance : AxiosInstance
    constructor(){
        this.instance = axios.create({
            baseURL: 'https://rickandmortyapi.com/api',
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}



const http = new Http().instance;

//instance.get('character'); //https://rickandmortyapi.com/api/character


export default http;