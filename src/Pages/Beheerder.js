import Menu from './components/Menu';
import Header from './components/Header';
import ProfileHeader from './components/ProfileHeader';

function Beheerder() {
    return (
      <div className="Beheerder linesBackgroundbottom">
        <Header />
        <ProfileHeader title="aanwezigheid" secondTitle="beheerder"/>
      <div className='adminCenter'> 
        <h2 className='spacingTitle'>Profiel gegevens</h2>
        <div className='adminInfo'> 
          <h3 className='spacingTitle'> Joey Vonck </h3>
          <h3 className='spacingTitle'> Roncalli</h3>
          <h5> j.vonck@hotmail.com</h5>
          <h5> tel: 0619628475</h5>
        </div>
      </div>
        <Menu />
    </div> 
    );
  }
  
  export default Beheerder;