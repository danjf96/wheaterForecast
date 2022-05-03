import { StyleSheet } from "react-native";
import Colors from "../../assets/Colors";
import { height, width } from "../../assets/GlobalStyles";


const Styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: 'transparent',
        minHeight: height,
        width: '100%',
    },

    container: {
        width: '100%',
        //paddingHorizontal: 15,
        backgroundColor: 'transparent',
        marginTop: 30
    },


})

export default Styles