import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { convertMeterInKM } from '../../utils/functions'
import Card from '../card'
import RowItem from '../rowItem'
import Styles from './styles'
import { CURRENTTEMPERATUREPROPS } from './types'

const CurrentTemperature = (props:CURRENTTEMPERATUREPROPS) => {
    const { temp, temp_min, temp_max, description, icon, windSpeed, humidity, pressure, feels_like } = props

    return (
        <View style={Styles.container}>

            <View style={Styles.containerTwo}>
                <Text style={Styles.temp}>{temp?.toFixed(1)} °C</Text>
                <Image source={{ uri: icon }} style={Styles.icon}/>
            </View>
            <Text style={Styles.description}>{description}</Text>


            <Card>
                <RowItem label='Temp. min:' value={`${temp_min?.toFixed(1)} °C`} />
                <RowItem label='Temp. max:' value={`${temp_max?.toFixed(1)} °C`} />
                <RowItem label='Sensação:' value={`${feels_like?.toFixed(1)} °C`} />
                <RowItem label='Umidade:' value={`${humidity}%`} />
                <RowItem label='Pressão:' value={`${pressure} mbar`} />
                <RowItem label='Vel. do vendo:' value={`${convertMeterInKM(windSpeed)} Km/h`} />
            </Card>            

        </View>
    )
}

export default CurrentTemperature