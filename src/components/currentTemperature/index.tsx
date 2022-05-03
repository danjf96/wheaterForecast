import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { round } from '../../utils/functions'
import Card from '../card'
import RowItem from '../rowItem'
import Styles from './styles'
import { CURRENTTEMPERATUREPROPS } from './types'

const CurrentTemperature = (props:CURRENTTEMPERATUREPROPS) => {
    const { temp, temp_min, temp_max, description, daily } = props
    return (
        <View style={Styles.container}>

            <View style={Styles.containerTwo}>
                
                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={Styles.temp}>{temp?.toPrecision(2)} °C</Text>
                    <Text style={Styles.description}>{description}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Text style={Styles.textMinMax}>Máx: {round(temp_max)} °C</Text>
                        <Text style={[Styles.textMinMax, { marginRight: 0 }]}>min: {round(temp_min)} °C</Text>
                    </View>

                </View>
            </View>
            


            {daily && <Card>
               {daily?.map( (item, index) => (
                   <RowItem {...item} index={index} key={`item${index}`} />
               ))}
            </Card>}            

        </View>
    )
}

export default CurrentTemperature