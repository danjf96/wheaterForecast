import { STATEWEATHERFORECAST, Types } from "./types";
import geolocation from 'react-native-geolocation-service'
import api from "../../services/api";


//REDUCERS
const INITIAL_STATE: STATEWEATHERFORECAST = {
}

//STATE CASES
const STATE = (state = INITIAL_STATE, action: any):STATEWEATHERFORECAST => {
    switch (action.type) {
        case Types.CHANGE:
            return { ...state, ...action.payload }
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
       try{
            await api.get(`data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}`)
       }catch(e){

       }
    }

}

export default STATE