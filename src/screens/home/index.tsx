import React, { useEffect } from 'react'
import { ActivityIndicator, SafeAreaView, View } from 'react-native'
import Styles from './styles'
import { getPositions } from '../../utils/geolocation';
import { useDispatch, useSelector } from 'react-redux';
import { changeWheatherForecast, getWheatherForecast } from '../../store/weatherForecast';
import { ScrollView } from 'react-native-gesture-handler';
import CurrentTemperature from '../../components/currentTemperature';
import Header from '../../components/header';

const Home = (props:any) => {
    const { location, main, weather, wind, name, sys, loading } = useSelector( ({ weatherForecast }) => weatherForecast )
    const dispatch = useDispatch()

    const getLocation = async () => {
        const positions = await getPositions()
        if(positions) dispatch(changeWheatherForecast(positions, 'location'))
    }

    useEffect( () => {
        if(location) dispatch(getWheatherForecast(location))
    }, [location])

    useEffect( () => {
        getLocation()
    }, [])

    return (
        <ScrollView style={Styles.scroll}>
            <SafeAreaView>
                {!loading &&
                    <View style={Styles.container}>
                        <Header 
                            text={`${name} - ${sys.country}`}
                            onPress={getLocation}
                        />

                        <CurrentTemperature 
                            temperature={main.temp}
                            description={weather[0]?.description}
                            temp_max={main.temp_max}
                            temp_min={main.temp_min}
                            icon={`http://openweathermap.org/img/wn/${weather[0]?.icon}.png`}
                            windSpeed={wind.speed}
                        />

                    </View>
                }
                {loading && <ActivityIndicator  size={'large'} style={{ marginTop: 20 }} testID='loading'/>}
            </SafeAreaView>
        </ScrollView>
    )
}

export default Home