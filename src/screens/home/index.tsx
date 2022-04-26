import React, { useEffect } from 'react'
import { Image, View } from 'react-native'
import Styles from './styles'
import * as Animatable from 'react-native-animatable';
import { getPositions } from '../../utils/geolocation';
import { useDispatch, useSelector } from 'react-redux';
import { changeWheatherForecast, getWheatherForecast } from '../../store/weatherForecast';

const Home = (props:any) => {
    const { location } = useSelector( ({ weatherForecast }) => weatherForecast )
    const dispatch = useDispatch()

    const getLocation = async () => {
        const positions = await getPositions()
        console.log('AQUI', positions)

        if(positions) dispatch(changeWheatherForecast(positions, 'location'))
    }

    useEffect( () => {
        console.log('AQUI', location)
        if(location) dispatch(getWheatherForecast(location))
    }, [location])

    useEffect( () => {
        getLocation()
    }, [])

    return (
        <View style={Styles.container}>

        </View>
    )
}

export default Home