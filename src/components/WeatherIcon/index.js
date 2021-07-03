import React from 'react'
import PropTypes from 'prop-types'
import {ReactComponent as Cloudy} from './icons/cloudy.svg';
import {ReactComponent as Stormy} from './icons/stormy.svg';
import {ReactComponent as Rainy} from './icons/rainy.svg';
import {ReactComponent as Snowy} from './icons/snowy.svg';
import {ReactComponent as Sunny} from './icons/sunny.svg';
// import {ReactComponent as Windy} from './icons/windy.svg';
import './style.css'

function WeatherIcon(props) {

    function getIcon(){
        switch (props.type) {
            case 'cloudy':  return <Cloudy/>
            case 'stormy':  return <Stormy/>
            case 'rainy':   return <Rainy/>
            case 'snowy':   return <Snowy/>
            case 'sunny':   return <Sunny/>
            // case 'windy':  return <Windy/>
            default: return null
        }
    }

    return (
        <div className={`weatherIcon ${props.className}`}>
        {
            getIcon()
        }
        </div>
    )
}

WeatherIcon.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string
}

export default WeatherIcon

