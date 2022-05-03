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
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 15,
    },

    temp: {
        fontSize: 60,
        fontWeight: 'bold',
        color: Colors.text,
        marginBottom: 15
    },

    description: {
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: Colors.text
    },

    textWind: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 15,
        color: Colors.text
    },

    icon: { 
        width: 24, 
        height: 24, 
        marginLeft: 10,
        borderWidth: 2,
        marginRight: 10,
    },

    textMinMax: {
        color: Colors.text,
        marginRight: 10,
        fontSize: 15
    },

    label: {
        color: Colors.text
    }
})

export default Styles