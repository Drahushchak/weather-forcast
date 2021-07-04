import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function index(props) {
    return (
        <div className='weatherRow'>
            {
                props.children
            }
        </div>
    )
}

index.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element)
}

export default index

