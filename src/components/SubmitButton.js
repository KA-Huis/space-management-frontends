import React from 'react'

const SubmitButton = ({submitname}) => {
  return (
      <form>
        <input className='sbmBtn' type="submit" value={submitname}></input>
      </form>
  )
}

export default SubmitButton
