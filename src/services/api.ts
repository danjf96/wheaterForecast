import {
    Alert
} from 'react-native'
import axios from 'axios'

//DEV
const baseURL = 'https://api.openweathermap.org/'

var api = axios.create({
    baseURL,
    timeout: 20000,
    headers: {
        'Cache-Control': 'no-cache',
        'Access-Control-Allow-Origin': '*'
    }
});

api.interceptors.request.use(function (request) {
    request.url += `&appid=82a0167f1d3e9cb8a1f2634cf723a0a8`
    console.log('REQUEST => ',request)
    return request;
}, function (error) {
    //console.log('ERROR => ',error)
    return Promise.reject(error);
});

api.interceptors.response.use(function (response) {
    let { status, data } = response
    console.log('RESPONSE => ',response)
    return response;
}, function (error) {
    //console.log('ERROR => ',error)
    return Promise.reject(error);
});

export default api

export const URL = baseURL

export const errorHandling = (err: any) => {
    let treatedError
    if (err.response && err.response.data &&  err.response.data.message) {
        
        treatedError =err.response.data.message
            
    } else if (err.status == 500) { 
        treatedError = 'Erro interno do servidor.'
    } else {
        treatedError = 'Falha na comunicação com o servidor. Verifique sua conexão com a internet.'
    }
    Alert.alert('Atenção', treatedError)
    return treatedError
}