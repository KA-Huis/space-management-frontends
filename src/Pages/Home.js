import Menu from './components/Menu';
import Header from './components/Header'
import ProfileHeader from './components/ProfileHeader';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div className="Home">
        <Header />
        <ProfileHeader title="Hello" secondTitle="Britt Prop" thirdTitle="fijn dat je er weer bent"/>
        <Link class="menu-btn" to="/newspage" ><h5>lees hier de nieuwsberichten</h5></Link>
        <Menu />
    </div> 
    );
  }
  
  export default Home;