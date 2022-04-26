import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { convertMeterInKM } from '../../utils/functions'
import Styles from './styles'
import { CURRENTTEMPERATUREPROPS } from './types'

const CurrentTemperature = (props:CURRENTTEMPERATUREPROPS) => {
    const { temperature, temp_min, temp_max, description, icon, windSpeed } = props
    // console.log('PROPS COMpONENT', props)
    return (
        <View style={Styles.container}>
            <View style={Styles.containerTwo}>
                <Text style={Styles.temp}>{temperature?.toFixed(1)} °C</Text>
                <Image source={{ uri: icon }} style={Styles.icon}/>
            </View>
            <Text style={Styles.description}>{description}</Text>

            {
                (temp_min !== undefined && temp_max !== undefined) && 
                    <View style={Styles.containerMinMax}>
                        <Text style={Styles.textMinMax}>min: {temp_min?.toFixed(1)} °C</Text>
                        <Text style={Styles.textMinMax}>max: {temp_max?.toFixed(1)} °C</Text>
                    </View>
            }

            {windSpeed && <Text style={Styles.textWind}>Ventos: {convertMeterInKM(windSpeed)} Km/h</Text>}
        </View>
    )
}

export default CurrentTemperature