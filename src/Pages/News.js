import Menu from './components/Menu';
import Header from './components/Header';
import ToolinformationNews from './components/ToolinformationNews';
import profileOne from './components/images/news/profileOne.png';

function News() {
    return (
      <div className="News">
        <Header />
        <ToolinformationNews toolname='Nieuwsartikelen'/>
        <div className='scrollMenu'>
            <h1 className="scrollHeader">{'Nieuws Artikellen'}</h1>
            <div className='reparaties'>
                <div className='backgroundProfile'>
                    <img src={profileOne} />
                </div>
                <h5>malissa janssen</h5>
                <div className='repatatiesInfo'> 
                    <div className='reparatieTitel'>
                        <h6>Wafel actie geslaagd</h6>
                        <hr/>
                        <h4>meisjesgilden</h4>
                    </div>
                </div>
            </div>

            <div className='reparaties'>
                <div className='backgroundProfile'>
                    <img src={profileOne} />
                </div>
                <h5>jax wild</h5>
                <div className='repatatiesInfo'> 
                    <div className='reparatieTitel'>
                        <h6>Weekelijkse taken</h6>
                        <hr/>
                        <h4>jongensgilden</h4>
                    </div>
                </div>
            </div>

            <div className='reparaties'>
                <div className='backgroundProfile'>
                    <img src={profileOne} />
                </div>
                <h5>johan de boer</h5>
                <div className='repatatiesInfo'> 
                    <div className='reparatieTitel'>
                        <h6>creatieve avond</h6>
                        <hr/>
                        <h4>vrouwengilden</h4>
                    </div>
                </div>
            </div>

            <div className='reparaties'>
                <div className='backgroundProfile'>
                    <img src={profileOne} />
                </div>
                <h5>jan piet</h5>
                <div className='repatatiesInfo'> 
                    <div className='reparatieTitel'>
                        <h6>festival </h6>
                        <hr/>
                        <h4>mannengilden</h4>
                    </div>
                </div>
            </div>
        </div>

        

        <Menu />
    </div> 
    );
  }
  
  export default News;