import { Dimensions, StyleSheet } from "react-native";
import Colors from "./Colors";

export const LOGO = require('../assets/images/logo.png')
export const RELOAD = require('../assets/images/reload.png')
export const { height, width, fontScale, scale } = Dimensions.get('window')

export const GlobalStyle = StyleSheet.create({
    line: {
        width: '100%', 
        marginVertical: 25, 
        borderWidth: 0.3,
        borderColor: Colors.principal,
        opacity: 0.2
    }
})
