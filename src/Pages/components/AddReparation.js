
import Menu from './Menu.js';
import Header from './Header.js';
import InsertForm from './InsertForm.js';
import SubmitButton from './SubmitButton.js';



function AddReparation() {
    return (
      <div className="AddReparation">
      <Header />
      <InsertForm classname='insertFormInput1' idname='Apparaat' name='Apparaat' value='Kies Apparaat' labelname='Soort Apparaat'/>
      <InsertForm classname='insertFormInput1' idname='Ruimte' name='Ruimte' value='Kies een Ruimte' labelname='Kies een Ruimte'/>
      <InsertForm classname='insertFormInput1' idname='Onderwerp' name='Onderwerp' value='gebroken/defect/etc' labelname='Onderwerp'/>
      <InsertForm classname='insertFormInput1' idname='Gebruiker' name='Gebruiker' value='voor -achternaam' labelname='Gemeld door'/>
      <InsertForm classname='insertFormInput2'idname='Omschrijving' name='Omschrijving' value='Wat zie je?' labelname='Omschrijving'/>
      <div className='sbmBtnFlexBox'>
        <SubmitButton classname='sbmBtnConfirm' submitname='Bevestig' />
        <SubmitButton classname='sbmBtnConfirm' submitname='Annuleer' />
      </div>
      <Menu />
    </div>
    );
  }
  
  export default AddReparation;