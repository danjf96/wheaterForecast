import React from 'react'
import { Image, View } from 'react-native'
import Styles from './styles'
import * as Animatable from 'react-native-animatable';
import { LOGO } from '../../assets/GlobalStyles';

const Splash = (props:any) => {

    const endAnimation = (e:any) => {
      
    }

    return (
        <View style={Styles.container}>
            
            <Animatable.Image 
                source={LOGO} 
                style={Styles.image}
                animation={'lightSpeedIn'}
                onAnimationEnd={endAnimation}
                duration={1200}
                testID={'animation'}
            />

        </View>
    )
}

export default Splash