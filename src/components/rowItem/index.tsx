import React from 'react'
import { Image, Text, View } from 'react-native'
import Styles from './styles'
import { ROWITEMPROPS } from './types'
import 'moment/locale/pt-br'
import moment from 'moment'
import { round } from '../../utils/functions'

moment.locale('pt-br');

const RowItem = ({
    dt,
    weather,
    temp,
    index
}:ROWITEMPROPS) => {
    return (
        <View style={Styles.container}>
            <Text style={{ width: '12%', ...Styles.text}}>{index == 0 ? 'Hoje': moment.unix(dt).format('ddd')}</Text>
            <Image source={{ uri: `http://openweathermap.org/img/wn/${weather[0]?.icon}.png` }} style={{ width: 32, height: 32 }} />
            <Text  style={{ width: '40%',...Styles.text }}>{weather?.[0].description}</Text>
            <Text style={{ width: '30%', textAlign: 'right', ...Styles.text}} >{round(temp?.min)} °C / {round(temp?.max)} °C</Text>
        </View>
    )
}

export default RowItem