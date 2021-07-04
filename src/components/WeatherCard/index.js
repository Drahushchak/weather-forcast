import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import WeatherIcon from 'components/WeatherIcon'

function index(props) {
    return (
        <div className='weatherCard'>
            <div>{props.header}</div>
            <WeatherIcon type={props.icon}/>
            <div>{props.footer}</div>
        </div>
    )
}

index.propTypes = {
    header: PropTypes.string,
    icon: PropTypes.string,
    footer: PropTypes.string
}

export default index

