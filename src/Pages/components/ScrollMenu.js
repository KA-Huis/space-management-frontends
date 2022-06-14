import React, { useState } from 'react'
import waiting from './images/filterOptions/waiting.png';
import inproces from './images/filterOptions/inproces.png';
import letter from './images/filterOptions/new.png';
import check from './images/filterOptions/check.png';
import editButton from './images/editButton.png';
import Popup from './Popup';
import EditReparation from './EditReparation';



const ScrollMenu = ({scrollTitle, }) => {
    const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div className='scrollMenu'>
        <h1 className="scrollHeader">{scrollTitle}</h1>
        <div className='reparaties'>
            <div className='backgroundStatus'>
                <img className="smallStatus" src={waiting} />
            </div>
            <h5>Wachtend</h5>
            <div className='repatatiesInfo'> 
                <div className='reparatieTitel'>
                    <h4>Lamp defefect</h4>
                    <h4>keuken</h4>
                </div>
                <div>
                <button onClick={() => setButtonPopup(true)} className='change-btn'><img src={editButton} /></button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <EditReparation />
                    </Popup>
                </div>
            </div>
        </div>

        <div className='reparaties'>
            <div className='backgroundStatus'>
                <img className="smallStatus" src={check} />
            </div>
            <h5> afgerond </h5>
            <div className='repatatiesInfo'> 
                <div className='reparatieTitel'>
                    <h4>frituur kapot</h4>
                    <h4>keuken</h4>
                </div>
                <div>
                    <button onClick={() => setButtonPopup(true)} className='change-btn'><img src={editButton} /></button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <EditReparation />
                    </Popup>
                </div>
            </div>
        </div>

        <div className='reparaties'>
            <div className='backgroundStatus'>
                <img className="smallStatus" src={letter} />
            </div>
            <h5> nieuw</h5>
            <div className='repatatiesInfo'> 
                <div className='reparatieTitel'>
                    <h4>nieuw bier bestellen</h4>
                    <h4>voorraad</h4>
                </div>
                <div>
                    <button onClick={() => setButtonPopup(true)} className='change-btn'><img src={editButton} /></button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <EditReparation />
                    </Popup>
                </div>
            </div>
        </div>

        <div className='reparaties'>
            <div className='backgroundStatus'>
                <img className="smallStatus" src={inproces} />
            </div>
            <h5> in behandeling</h5>
            <div className='repatatiesInfo'> 
                <div className='reparatieTitel'>
                    <h4>afval vol</h4>
                    <h4>zaal</h4>
                </div>
                <div>
                    <button onClick={() => setButtonPopup(true)} className='change-btn'><img src={editButton} /></button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <EditReparation />
                    </Popup>
                </div>
            </div>
        </div>

        <div className='reparaties'>
            <div className='backgroundStatus'>
                <img className="smallStatus" src={waiting} />
            </div>
            <h5>Wachtend</h5>
            <div className='repatatiesInfo'> 
                <div className='reparatieTitel'>
                    <h4>bel kapot</h4>
                    <h4>voordeur</h4>
                </div>
                <div>
                    <button onClick={() => setButtonPopup(true)} className='change-btn'><img src={editButton} /></button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <EditReparation />
                    </Popup>
                </div>
            </div>
        </div>

        <div className='reparaties'>
            <div className='backgroundStatus'>
                <img className="smallStatus" src={waiting} />
            </div>
            <h5>Wachtend</h5>
            <div className='repatatiesInfo'> 
                <div className='reparatieTitel'>
                    <h4>bel kapot</h4>
                    <h4>voordeur</h4>
                </div>
                <div>
                    <button onClick={() => setButtonPopup(true)} className='change-btn'><img src={editButton} /></button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <EditReparation />
                    </Popup>
                </div>
            </div>
        </div>

        <div className='reparaties'>
            <div className='backgroundStatus'>
                <img className="smallStatus" src={waiting} />
            </div>
            <h5>Wachtend</h5>
            <div className='repatatiesInfo'> 
                <div className='reparatieTitel'>
                    <h4>bel kapot</h4>
                    <h4>voordeur</h4>
                </div>
                <div>
                    <button onClick={() => setButtonPopup(true)} className='change-btn'><img src={editButton} /></button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <EditReparation />
                    </Popup>
                </div>
            </div>
        </div>
    
        <div className='reparaties'>
            <div className='backgroundStatus'>
                <img className="smallStatus" src={waiting} />
            </div>
            <h5>Wachtend</h5>
            <div className='repatatiesInfo'> 
                <div className='reparatieTitel'>
                    <h4>bel kapot</h4>
                    <h4>voordeur</h4>
                </div>
                <div>
                    <button onClick={() => setButtonPopup(true)} className='change-btn'><img src={editButton} /></button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <EditReparation />
                    </Popup>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ScrollMenu