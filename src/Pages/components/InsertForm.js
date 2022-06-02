import React from 'react'


const InsertForm = ({classname, idname, name, value, labelname}) => {
  return (
    <form className='insertForm'>
        <label className='insertFormLabel' for={idname}>{labelname}</label><br></br>
        <input className={classname} type="text" id={idname} name={name} value={value}></input>
    </form>
  )
}

export default InsertForm
