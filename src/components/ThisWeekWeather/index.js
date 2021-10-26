import DetailItem from 'components/DetailItem'
import WeatherIcon from 'components/WeatherIcon'
import WeatherRow from 'components/WeatherRow'
import { useMediaQuery } from 'react-responsive'
import React, { useState } from 'react'
import './style.css'
import WeatherCard from 'components/WeatherCard'

export function ThisWeekWeather() {

    function getWeekWeather(){
        return [
            {
                id: 1,
                day: {
                    name: 'Tue',
                    date: '30/7'
                },
                weather: 'windy',
                temperature: {
                    min: '10°',
                    max: '21°'
                },
                wind: '12mph',
                rain: '0%'
            },
            {
                id: 2,
                day: {
                    name: 'Tue',
                    date: '30/7'
                },
                weather: 'snowy',
                temperature: {
                    min: '10°',
                    max: '21°'
                },
                wind: '12mph',
                rain: '0%'
            },
            {
                id: 3,
                day: {
                    name: 'Tue',
                    date: '30/7'
                },
                weather: 'stormy',
                temperature: {
                    min: '10°',
                    max: '21°'
                },
                wind: '12mph',
                rain: '0%'
            },
            {
                id: 4,
                day: {
                    name: 'Tue',
                    date: '30/7'
                },
                weather: 'rainy',
                temperature: {
                    min: '10°',
                    max: '21°'
                },
                wind: '12mph',
                rain: '0%'
            },
            {
                id: 5,
                day: {
                    name: 'Tue',
                    date: '30/7'
                },
                weather: 'sunny',
                temperature: {
                    min: '10°',
                    max: '21°'
                },
                wind: '12mph',
                rain: '0%'
            },
        ]
    }
    
    const isMobile = useMediaQuery({ query: '(max-width: 450px)' })
    const [weekWeather, ] = useState(getWeekWeather)
    console.log(isMobile)
    return (
    <div className="thisWeekWeather">
        <h2 className="header">Next 5 days</h2>
        <div className="container">
            {
                weekWeather.map(item => {
                    return isMobile ? (
                        <WeatherCard 
                            key={item.id}
                            header={item.day.name}
                            icon={item.weather}
                            footer={`${item.temperature.min}-${item.temperature.max}`}

                        />
                    ):(
                        <WeatherRow key={item.id}>
                            <DetailItem value={item.day.name} detail={item.day.date}/>
                            <WeatherIcon type={item.weather}/>
                            <DetailItem value={item.temperature.min} detail='Low'/>
                            <DetailItem value={item.temperature.max} detail='High'/>
                            <DetailItem value={item.wind} detail='Wind'/>
                            <DetailItem value={item.rain} detail='Rain'/>
                        </WeatherRow>
                    )
                })
            }
        </div>
    </div>
    )
}
