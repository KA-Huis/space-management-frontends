import React, { useState } from 'react'
import Button from './Button'
import logoBackground from './images/Background.png';
import Popup from './Popup';
import AddReparation from './AddReparation';

const Toolinformation = ({addbtn, toolname}) => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
        <div className='toolInformation'>
          <img src={logoBackground}></img>
          <div className='headerInfo'> 
            <h5>Overzicht</h5>
            <h3>{toolname}</h3>
              <Button onClick={() => setButtonPopup(true)} className="add-button" title={addbtn}/>
              </div>
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <AddReparation />
            </Popup>
        </div>
  )
}

export default Toolinformation
