import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, View, ScrollView, RefreshControl, Text } from 'react-native'
import Styles from './styles'
import { getPositions } from '../../utils/geolocation';
import { useDispatch, useSelector } from 'react-redux';
import { changeWheatherForecast, getMoreWheatherForecast, getWheatherForecast } from '../../store/weatherForecast';
import CurrentTemperature from '../../components/currentTemperature';
import Header from '../../components/header';
import Colors from '../../assets/Colors';
import Container from '../../components/container';

const Home = (props:any) => {
    const { location, main, weather, wind, name, sys, loading, daily } = useSelector( ({ weatherForecast }) => weatherForecast )
    const dispatch = useDispatch()

    const getLocation = async () => {
        try{
            const positions = await getPositions()
            dispatch(changeWheatherForecast(positions, 'location'))
        } catch(e){
            dispatch(changeWheatherForecast(false, 'loading'))

        }
    }

    useEffect( () => {
        if(location) {
            dispatch(getMoreWheatherForecast(location))
            dispatch(getWheatherForecast(location))
        }
    }, [location])

    useEffect( () => {
        if(!location) getLocation()
    }, [])

    return (
        <Container>
            <ScrollView 
                style={Styles.scroll} 
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={getLocation}
                    />}
                >
                <SafeAreaView>
                    {!loading &&
                        <View style={Styles.container}>
                            <Header 
                                text={`${name} - ${sys.country}`}
                                onPress={getLocation}
                            />

                            <CurrentTemperature 
                                {...main}
                                description={weather[0]?.description}
                                icon={`http://openweathermap.org/img/wn/${weather[0]?.icon}.png`}
                                windSpeed={wind.speed}
                                daily={daily}
                            />

                        </View>
                    }
                    {loading && <ActivityIndicator color={Colors.text}  size={'large'} style={{ marginTop: 20 }} testID='loading'/>}
                </SafeAreaView>
            </ScrollView>
        </Container>
    )
}

export default Home