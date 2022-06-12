import React, { useState } from 'react'
import Button from './Button'
import logoBackground from './images/Background.png';
import Popup from './Popup';
import AddNews from './AddNews'

const ToolinformationNews = ({toolname}) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
        <div className='toolInformation'>
          <img src={logoBackground}></img>
          <div className='headerInfo'> 
          <h1 className='toolInformationText1'>Overzicht</h1>
          <h1 className='toolInformationText2'>{toolname}</h1>
          <Button onClick={() => setButtonPopup(true)} className="add-button" title={'Artikel aanmaken'}/>
          </div>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <AddNews />
          </Popup>
        </div>
  )
}

export default ToolinformationNews