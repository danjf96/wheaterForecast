import { StyleSheet, StyleSheetProperties, ViewStyle } from "react-native";
import Colors from "../../assets/Colors";

const Styles = StyleSheet.create({
    container: { 
        width: '100%', 
        flexDirection: 'row', 
        justifyContent:'space-between', 
        marginVertical: 13, 
        alignItems: 'center'
    },

    text: {
        color: Colors.textSecondary,
        fontSize: 17,
        textTransform: 'capitalize'
    }
})

export default Styles