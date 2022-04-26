import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

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
        marginLeft: 15,
        //tintColor: Colors.text
    },

    city: {
        textAlign: 'center',
        fontSize: 20,
        color: Colors.text
    }
})

export default Styles