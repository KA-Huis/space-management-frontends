import Header from './components/Header';
import Menu from './components/Menu';
import ToolinformationNews from './components/ToolinformationNews';

function Newspage() {
    return (
      <div className="Newspage">
        <Header />
        <ToolinformationNews toolname='Nieuwsartikelen'/>
        <Menu />
    </div> 
    );
  }
  
  export default Newspage;