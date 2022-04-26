import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    constainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },

    icon: {
        width: 48,
        height: 48,
        resizeMode:'contain',
        marginLeft: 15
    },

    city: {
        textAlign: 'center',
        fontSize: 20
    }
})

export default Styles