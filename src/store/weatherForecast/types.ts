import Geolocation from 'react-native-geolocation-service'
export interface STATEWEATHERFORECAST extends CURREMTWEATHER {
    location?: Geolocation.GeoCoordinates,
    loading: boolean
    
}

export interface CURREMTWEATHER {
    base: string,
    clouds: { all: number }
    cod: number,
    coord: { lon: number, lat: number }
    dt: number,
    id: number,
    main: CURRENT,
    name: string,
    sys: { type: number, id: number, country: string, sunrise: number, sunset: number },
    timezone: number,
    visibility: number,
    weather: WHETHER[],
    wind: WIND
}

export interface CURRENT {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
}

export interface WHETHER {
    description:string
    icon: string
    id: number
    main: string
}

export interface WIND { speed: number, deg: number, gust: number}
//TYPES ACTIONS
export const Types = {
    CLEAN: 'CLEAN',
    CHANGE: 'CHANGE_WEATHERFORECAST',
    LOAD: 'LOAD_WEATHERFORECAST',
}