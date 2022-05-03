import React, { useEffect } from 'react'
import Styles from './styles'
import * as Animatable from 'react-native-animatable';
import { LOGO } from '../../assets/GlobalStyles';
import { getPositions } from '../../utils/geolocation';
import Container from '../../components/container';

const Splash = (props:any) => {

    const endAnimation = async(e:any) => {
        if(e.finished) {
            getPositions()
            props.navigation.navigate('Home')
        }
    }

    return (
        <Container style={Styles.container}>
            
            <Animatable.Image 
                source={LOGO} 
                style={Styles.image}
                animation={'bounceIn'}
                onAnimationEnd={endAnimation}
                duration={1200}
                testID={'animation'}
                //useNativeDriver={true}
            />

        </Container>
    )
}

export default Splash