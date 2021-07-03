import DetailItem from 'components/DetailItem'
import WeatherCard from 'components/WeatherCard'
import React, { useState } from 'react'
import WeatherIcon from '../WeatherIcon'
import './style.css'


export function TodayWeather() {

    function getTodayStats(){
        return [
            {
                'id': 1,
                'value': '23°',
                'detail': 'High'
            },
            {
                'id': 2,
                'value': '14°',
                'detail': 'Low'
            },
            {
                'id': 3,
                'value': '7mpg',
                'detail': 'Wind'
            },
            {
                'id': 4,
                'value': '0%',
                'detail': 'Rain'
            },
            {
                'id': 5,
                'value': '05:27',
                'detail': 'Sunrise'
            },
            {
                'id': 6,
                'value': '20:57°',
                'detail': 'Sunset'
            }
        ]
    }

    function getHourlyTemperature(){
        return []
    }

    const [stats, ] = useState(getTodayStats);
    const [hourlyTemperatItems, ] = useState(getHourlyTemperature);

    return (
        <div className='todayWeather'>
            <div className='todayGeneral'>
                <div className='todayTemperature'>
                    <WeatherIcon type='cloudy'/>
                    <DetailItem value='21°' detail='Mostly sunny'/>
                </div>
                <div className='todayStats'>
                    {
                        stats.map(stat => <DetailItem key={stat.id} value={stat.value} detail={stat.detail}/>)
                        
                    }
                </div>
            </div>
            <div className='todayHourly'>
                <h2>Today&apos;s weather</h2>
                <div className='content'>
                    <WeatherCard 
                        header='3am'
                        icon={<WeatherIcon type='cloudy'/>}
                        footer='14°'
                    />
                </div>
            </div>
        </div>
    )
}
