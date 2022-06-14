import Menu from './components/Menu';
import Header from './components/Header';
import ProfileHeader from './components/ProfileHeader';

function Beheerder() {
    return (
      <div className="Beheerder linesBackgroundbottom">
        <Header />
        <ProfileHeader title="aanwezigheid" secondTitle="beheerder"/>
      <div className='adminCenter'> 
        <h2 className='spacingTitle'>Beheerders informatie</h2>
        <div className='adminInfo'> 
          <h3 className='spacingTitle'> Enno Overbeeke </h3>
          <h3 className='spacingTitle'> Beheerder</h3>
          <h5> Ennooverbeeke@gmail.nl</h5>
          <h5> tel: 0612345678</h5>
        </div>
      </div>
        <Menu />
    </div> 
    );
  }
  
  export default Beheerder;