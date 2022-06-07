import React from 'react'

const PopupHeader = ({title, subtitle}) => {
    return (
        <div className='popupHeader'>
            <h1 className='popupHeader popupHeaderTtl'>{title}</h1>
            <h1 className='popupHeader popupHeaderSub'>{subtitle}</h1>
        </div>
    )
}
export default PopupHeader