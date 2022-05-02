import { CURRENT } from "../../store/weatherForecast/types";

export interface CURRENTTEMPERATUREPROPS extends CURRENT {
    description: string,
    icon: string,
    windSpeed?: number
}