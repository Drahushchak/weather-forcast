import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

function DetailItem(props) {
    return (
        <div className='detailItem'>
            <div className='value'>{props.value}</div>
            <div className='detail'>{props.detail}</div>
        </div>
    )
}

DetailItem.propTypes = {
    value: PropTypes.string,
    detail: PropTypes.string
}

export default DetailItem

