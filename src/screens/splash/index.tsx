import React from 'react'
import { View } from 'react-native'
import Styles from './styles'
import * as Animatable from 'react-native-animatable';
import { LOGO } from '../../assets/GlobalStyles';

const Splash = (props:any) => {

    const endAnimation = (e:any) => {
        e.finished && props.navigation.navigate('Home')
    }

    return (
        <View style={Styles.container}>
            
            <Animatable.Image 
                source={LOGO} 
                style={Styles.image}
                animation={'bounceIn'}
                onAnimationEnd={endAnimation}
                duration={1200}
                testID={'animation'}
                //useNativeDriver={true}
            />

        </View>
    )
}

export default Splash