import { StyleSheet, StyleSheetProperties, ViewStyle } from "react-native";
import Colors from "../../assets/Colors";

const Styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },

    value: {
        color: Colors.text,
        fontSize: 18
    },

    label: {
        color: Colors.text,
        fontSize: 18,
        fontWeight: '600'
    }
})

export default Styles