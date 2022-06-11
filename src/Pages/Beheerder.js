import Menu from './components/Menu';
import Header from './components/Header';
import ProfileHeader from './components/ProfileHeader';

function Beheerder() {
    return (
      <div className="Beheerder linesBackgroundbottom">
        <Header />
        <ProfileHeader title="aanwezigheid" secondTitle="beheerder"/>
      <div className='adminCenter'> 
        <h2 className='spacingTitle'>Beheerder van de dag</h2>
        <div className='adminInfo'> 
          <h3 className='spacingTitle'> aanwezig </h3>
          <h3 className='spacingTitle'> Jan van der heiden </h3>
          <h5> contact gegevens</h5>
          <h5> tel: 0647563564</h5>
        </div>
      </div>
        <Menu />
    </div> 
    );
  }
  
  export default Beheerder;