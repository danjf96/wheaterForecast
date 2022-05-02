import React from 'react'
import { View } from 'react-native'
import Styles from './styles'
import { CARDPROPS } from './types'


const Card = (props: any) => {
    return (
        <View style={[Styles.container,props.style]}>
            {props?.children}
        </View>
    )
}

export default Card