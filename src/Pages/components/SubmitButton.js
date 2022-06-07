import React from 'react'

const SubmitButton = ({classname, submitname}) => {
  return (
      <form>
        <input className={classname} type="submit" value={submitname}></input>
      </form>
  )
}

export default SubmitButton
