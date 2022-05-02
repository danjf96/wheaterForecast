import { TextStyle, ViewStyle } from "react-native";

export interface ROWITEMPROPS {
    label: string,
    value: string,
    styleLabel?: TextStyle
    styleValue?: TextStyle,
    styleContainer?: ViewStyle
}