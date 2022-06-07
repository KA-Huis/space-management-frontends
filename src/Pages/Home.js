import Menu from './components/Menu';
import Header from './components/Header'
import Toolinformation from './components/Toolinformation';
import ProfileHeader from './components/ProfileHeader';

function Home() {
    return (
      <div className="Home">
        <Header />
        <ProfileHeader title="Hello" secondTitle="Britt Prop" thirdTitle="fijn dat je er weer bent"/>
        <Menu />
    </div> 
    );
  }
  
  export default Home;