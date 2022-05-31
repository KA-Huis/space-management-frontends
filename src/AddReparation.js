import react from 'react';
import Menu from './components/Menu.js';
import Header from './components/Header.js';
import './App.css';
import InsertForm from './components/InsertForm.js';
import SubmitButton from './components/SubmitButton.js';

function AddReparation() {
    return (
      <div className="App">
      <Header />
      <InsertForm classname='insertFormInput1' idname='Apparaat' name='Apparaat' value='Kies Apparaat' labelname='Soort Apparaat'/>
      <InsertForm classname='insertFormInput1' idname='Ruimte' name='Ruimte' value='Kies een Ruimte' labelname='Kies een Ruimte'/>
      <InsertForm classname='insertFormInput1' idname='Onderwerp' name='Onderwerp' value='gebroken/defect/etc' labelname='Onderwerp'/>
      <InsertForm classname='insertFormInput1' idname='Gebruiker' name='Gebruiker' value='voor -achternaam' labelname='Gemeld door'/>
      <InsertForm classname='insertFormInput2'idname='Omschrijving' name='Omschrijving' value='Wat zie je?' labelname='Omschrijving'/>
      {/* <div className='sbmBtnFlexBox'>
        <SubmitButton submitname='Bevestig' />
        <SubmitButton submitname='Annuleer' />
      </div> */}
      <Menu />
    </div>
    );
  }
  
  export default AddReparation;