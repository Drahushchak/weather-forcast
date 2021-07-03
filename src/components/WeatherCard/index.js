import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function index(props) {
    return (
        <div className='weatherCard'>
            <div>{props.header}</div>
            {props.icon}
            <div>{props.footer}</div>
        </div>
    )
}

index.propTypes = {
    header: PropTypes.string,
    icon: PropTypes.element,
    footer: PropTypes.string
}

export default index

