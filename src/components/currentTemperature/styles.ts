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
        fontWeight: 'bold',
        color: Colors.text
    },

    description: {
        fontSize: 25,
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
        width: 48, 
        height: 48, 
        marginLeft: 10,
    },

    textMinMax: {
        color: Colors.text
    }
})

export default Styles