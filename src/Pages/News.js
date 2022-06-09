import Menu from './components/Menu';
import Header from './components/Header';
import Toolinformation from './components/Toolinformation';
import profileOne from './components/images/news/profileOne.png';

function News() {
    return (
      <div className="News">
        <Header />
        <Toolinformation toolname={'Nieuwsberichten'} addbtn={'artikel aanmaken'}/>
        <div className='scrollMenu'>
            <h1 className="scrollHeader">{'Nieuws Artikellen'}</h1>
            <div className='reparaties'>
                <div className='backgroundStatus'>
                    <img src={profileOne} />
                </div>
                <h5>britt prop</h5>
                <div className='repatatiesInfo'> 
                    <div className='reparatieTitel'>
                        <h6>Wafel actie geslaagd</h6>
                        <hr/>
                        <h4>meisjesgilden</h4>
                    </div>
                    <div>
                       
                    </div>
                </div>
            </div>
        </div>

        <Menu />
    </div> 
    );
  }
  
  export default News;