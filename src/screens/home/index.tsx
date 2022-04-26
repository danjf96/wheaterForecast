import React, { useEffect } from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import Styles from './styles'
import * as Animatable from 'react-native-animatable';
import { getPositions } from '../../utils/geolocation';
import { useDispatch, useSelector } from 'react-redux';
import { changeWheatherForecast, getWheatherForecast } from '../../store/weatherForecast';
import { ScrollView } from 'react-native-gesture-handler';

const Home = (props:any) => {
    const { location, main } = useSelector( ({ weatherForecast }) => weatherForecast )
    const dispatch = useDispatch()

    const getLocation = async () => {
        const positions = await getPositions()
        console.log('AQUI', positions)

        if(positions) dispatch(changeWheatherForecast(positions, 'location'))
    }

    useEffect( () => {
        console.log('AQUI', location)
        //if(location) dispatch(getWheatherForecast(location))
    }, [location])

    useEffect( () => {
        getLocation()
    }, [])

    return (
        <ScrollView style={Styles.scroll}>
            <SafeAreaView>
                <View style={Styles.container}>
                    <Text>{main.temp}</Text>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Home