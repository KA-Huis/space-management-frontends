import React from 'react'

const Button = ({title, onClick}) => {
  return (
    <button onClick={onClick} className='add-btn'>
        {title}
    </button>
  )
}

export default Button
