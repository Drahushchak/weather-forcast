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
        return [
            {
                id: 1,
                header: '3am',
                icon: 'cloudy',
                footer: '14°'
            },
            {
                id: 2,
                header: '6am',
                icon: 'cloudy',
                footer: '16°'
            },
            {
                id: 3,
                header: '9am',
                icon: 'cloudy',
                footer: '17°'
            },
            {
                id: 4,
                header: '12am',
                icon: 'cloudy',
                footer: '19°'
            },
            {
                id: 5,
                header: '3pm',
                icon: 'sunny',
                footer: '21°'
            },
            {
                id: 6,
                header: '6pm',
                icon: 'sunny',
                footer: '20°'
            },
            {
                id: 7,
                header: '9pm',
                icon: 'cloudy',
                footer: '18°'
            }
        ]
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
                    {
                        hourlyTemperatItems.map(item => {
                            return <WeatherCard 
                                key={item.id}
                                header={item.header}
                                icon={item.icon}
                                footer={item.footer}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
