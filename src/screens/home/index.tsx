import React, { useEffect } from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import Styles from './styles'
import * as Animatable from 'react-native-animatable';
import { getPositions } from '../../utils/geolocation';
import { useDispatch, useSelector } from 'react-redux';
import { changeWheatherForecast, getWheatherForecast } from '../../store/weatherForecast';
import { ScrollView } from 'react-native-gesture-handler';
import CurrentTemperature from '../../components/currentTemperature';

const Home = (props:any) => {
    const { location, main, weather, wind } = useSelector( ({ weatherForecast }) => weatherForecast )
    const dispatch = useDispatch()

    const getLocation = async () => {
        const positions = await getPositions()
        console.log('AQUI', positions)

        if(positions) dispatch(changeWheatherForecast(positions, 'location'))
    }

    useEffect( () => {
       // console.log('AQUI', location)
        if(location) dispatch(getWheatherForecast(location))
    }, [location])

    useEffect( () => {
        getLocation()
    }, [])

    return (
        <ScrollView style={Styles.scroll}>
            <SafeAreaView>
                <View style={Styles.container}>
                    <CurrentTemperature 
                        temperature={main.temp}
                        description={weather[0]?.description}
                        temp_max={main.temp_max}
                        temp_min={main.temp_min}
                        icon={`http://openweathermap.org/img/wn/${weather[0]?.icon}.png`}
                        windSpeed={wind.speed}
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Home