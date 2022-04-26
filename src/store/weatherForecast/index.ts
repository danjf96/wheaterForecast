import { STATEWEATHERFORECAST, CURREMTWEATHER, Types } from "./types";
import geolocation from 'react-native-geolocation-service'
import api from "../../services/api";


//REDUCERS
const INITIAL_STATE: STATEWEATHERFORECAST = {
    loading: true,
    base: "test",
    clouds: {all: 0},
    cod: 0,
    coord: {lon: -122.4064, lat: 37.7858},
    dt: 0,
    id: 0,
    main: {
        feels_like: 0,
        humidity: 0,
        pressure: 0,
        temp: 0,
        temp_max: 0,
        temp_min: 0
    },
    name: "teste",
    sys: { type: 0, id: 0, country: 'teste', sunrise: 0, sunset: 0},
    timezone: -25200,
    visibility: 10000,
    weather: [],
    wind: {speed: 0, deg: 0, gust: 0}
}

//STATE CASES
const STATE = (state = INITIAL_STATE, action: any):STATEWEATHERFORECAST => {
    switch (action.type) {
        case Types.CHANGE:
            return { ...state, ...action.payload }
        case Types.LOAD:
            return { ...state, loading: action.loading }
        case Types.CLEAN:
            return INITIAL_STATE
        default:
            return state;
    }
}

//Actions Creators
export const changeWheatherForecast = (payload:any, key?: string) => {
    return async (dispatch: (arg0:any) => any) => {
        dispatch({ type: Types.CHANGE, payload: key ? { [key]: payload } : payload })
    }

}

export const getWheatherForecast = (coords: geolocation.GeoCoordinates) => {
    return async (dispatch: (arg0:any) => any) => {
        dispatch({ type: Types.LOAD, loading: true })
       try{
            const { data }:{ data: CURREMTWEATHER} = await api.get(`data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&lang=pt_br&units=metric`)
            dispatch({ type: Types.CHANGE, payload: { ...data, loading: false} })
       }catch(e){
            dispatch({ type: Types.LOAD, loading: false })
       }
    }

}

export default STATE