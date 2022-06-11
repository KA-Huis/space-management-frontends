import React from 'react';
import waiting from './images/filterOptions/waiting.png';
import inproces from './images/filterOptions/inproces.png';
import letter from './images/filterOptions/new.png';
import check from './images/filterOptions/check.png';


const ScrollMenu = ({scrollTitle, }) => {
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
                    <img className="smallStatus" src={waiting} />
                </div>
            </div>
        </div>


        <div className='reparaties'>
          <img className="smallStatus" src={check} /> 
            <h5>Wachtend</h5>
            <div className='repatatiesInfo'> 
                <h4>Lamp defefect</h4>
                <h4>keuken</h4>
            </div>
        </div>
        <div className='reparaties'>
        <img className="smallStatus" src={letter} />
            <h5>Wachtend</h5>
            <div className='repatatiesInfo'> 
                <h4>Lamp defefect</h4>
                <h4>keuken</h4>
            </div>
        </div>
        <div className='reparaties'>
        <img className="smallStatus" src={inproces} />
            <h5>Wachtend</h5>
            <div className='repatatiesInfo'> 
                <h4>Lamp defefect</h4>
                <h4>keuken</h4>
            </div>
        </div>
        <div className='reparaties'>
        <img className="smallStatus" src={inproces} />
            <h5>Wachtend</h5>
            <div className='repatatiesInfo'> 
                <h4>Lamp defefect</h4>
                <h4>keuken</h4>
            </div>
        </div>
        <div className='reparaties'>
        <img className="smallStatus" src={inproces} />
            <h5>Wachtend</h5>
            <div className='repatatiesInfo'> 
                <h4>Lamp defefect</h4>
                <h4>keuken</h4>
            </div>
        </div>
        <div className='reparaties'>
        <img className="smallStatus" src={inproces} />
            <h5>Wachtend</h5>
            <div className='repatatiesInfo'> 
                <h4>Lamp defefect</h4>
                <h4>keuken</h4>
            </div>
        </div>
        <div className='reparaties'>
        <img className="smallStatus" src={inproces} />
            <h5>Wachtend</h5>
            <div className='repatatiesInfo'> 
                <h4>Lamp defefect</h4>
                <h4>keuken</h4>
            </div>
        </div>
    </div>
  )
}

export default ScrollMenu