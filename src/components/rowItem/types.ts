import { TextStyle, ViewStyle } from "react-native";
import { DAILYPROPS } from "../../store/weatherForecast/types";

export interface ROWITEMPROPS extends DAILYPROPS {
    index?: number
}