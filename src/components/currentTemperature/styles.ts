import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";


const Styles = StyleSheet.create({

    container: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center'
    },

    containerTwo: { 
        flexDirection: 'row', 
        alignItems: 'center'
    },

    containerMinMax: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 15
    },

    temp: {
        fontSize: 60,
        fontWeight: 'bold'
    },

    description: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },

    textWind: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 15
    },

    icon: { 
        width: 48, 
        height: 48, 
        marginLeft: 10 
    }
})

export default Styles