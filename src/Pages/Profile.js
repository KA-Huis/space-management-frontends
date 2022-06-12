import React, { useState } from 'react'
import Menu from './components/Menu';
import Header from './components/Header'
import ProfileHeader from './components/ProfileHeader';
import EditProfile from './components/EditProfile';
import editButton from './components/images/editButton.png';
import Popup from './components/Popup';


function Profile() {
  const [buttonPopup, setButtonPopup] = useState(false);

    return (
      <div className="Beheerder linesBackgroundbottom">
      <Header />
      <ProfileHeader title="gegevens" secondTitle="Gebruiker"/>
    <div className='adminCenter'> 
      <h2 className='spacingTitle'>Profiel gegevens</h2>
      <div className='adminInfo'> 
        <h3> Joey Vonck </h3>
        <h3 className='spacingTitle'> Roncalli </h3>
        <h4> contact gegevens</h4>
        <h5> Email: j.vonck@hotmail.com</h5>
        <h5> tel: 0647563564</h5>
        <h5 className='spacingTitle'> leeftijd: 25 jaar</h5>
        <button onClick={() => setButtonPopup(true)} className='change-btn'><img src={editButton} /></button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <EditProfile />
          </Popup>
      </div>
    </div>
      <Menu />
  </div> 
    );
  }
  
  export default Profile;