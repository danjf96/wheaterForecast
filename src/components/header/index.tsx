import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { RELOAD } from '../../assets/GlobalStyles'
import Styles from './styles'
import { HEADERPROPS } from './types'


const Header = ({ text, showIcon = true, onPress, icon = RELOAD}:HEADERPROPS) => {
    return (
        <View style={Styles.constainer}>
            <Text style={Styles.city}>{text}</Text>
            {showIcon && onPress &&
                <TouchableOpacity onPress={onPress} testID='reload'>
                    <Image source={icon} style={Styles.icon}/>
                </TouchableOpacity>
            }
        </View>
    )
}

export default Header