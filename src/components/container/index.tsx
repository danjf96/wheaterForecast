import React from 'react'
import LinearGradient from "react-native-linear-gradient"
import Colors from "../../assets/Colors"
import Styles from "./styles"


const Container = (props:any) => {
    return(
        <LinearGradient 
            colors={[Colors.principal, '#9d50dc']}
            style={[Styles.container,props.style]}>
                {props.children}
        </LinearGradient>
    )
}

export default Container