import Geolocation from 'react-native-geolocation-service'
export interface STATEWEATHERFORECAST {
    location?: Geolocation.GeoCoordinates 

}

//TYPES ACTIONS
export const Types = {
    CLEAN: 'CLEAN',
    CHANGE: 'CHANGE_WEATHERFORECAST '
}