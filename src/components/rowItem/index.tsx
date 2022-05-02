import React from 'react'
import { Text, View } from 'react-native'
import Styles from './styles'
import { ROWITEMPROPS } from './types'


const RowItem = ({
    styleContainer,
    styleLabel,
    styleValue,
    label,
    value
}:ROWITEMPROPS) => {
    return (
        <View style={[Styles.container, styleContainer]}>
                
            <Text style={[Styles.label, styleLabel]} >{label}</Text>
            <Text style={[Styles.value, styleValue]}>{value}</Text>
        
        </View>
    )
}

export default RowItem