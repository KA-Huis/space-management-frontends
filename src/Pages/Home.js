import Menu from './components/Menu';
import Header from './components/Header'
import ProfileHeader from './components/ProfileHeader';
import { Link } from 'react-router-dom';
import readMore from './components/images/readMore.png';

function Home() {
    return (
      <div className="Home">
        <Header />
        <ProfileHeader title="Hello" secondTitle="Britt Prop" thirdTitle="fijn dat je er weer bent"/>
        <div className='laatsteNieuws'> 
        <div className='nieuwsHeader'> 
          <h2> laatste Nieuws</h2>
          <Link class="menu-btn" to="/news" ><h5>lees meer</h5><img className='readMore' src={readMore} /> </Link>
          </div>
          <div className='nieuwsBericht'>
            <h3>Laatse Nieuws - ka-huis</h3>
            <hr/>
            <h4>Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h4>
          </div>
        </div>
        <Menu />
    </div> 
    );
  }
  
  export default Home;