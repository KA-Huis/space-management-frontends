import InsertForm from './InsertForm.js';
import SubmitButton from './SubmitButton.js';
import PopupHeader from './PopupHeader.js';
import cameraButton from './images/camerabutton.png'
import { Link } from 'react-router-dom';

function AddReparation() {
    return (
      <div className="AddReparation">
      <PopupHeader title='Reparaties' subtitle='Maken'/>
      <InsertForm classname='insertFormInput1' idname='Apparaat' name='Apparaat' labelname='Soort Apparaat'/>
      <InsertForm classname='insertFormInput1' idname='Ruimte' name='Ruimte'  labelname='Kies een Ruimte'/>
      <InsertForm classname='insertFormInput1' idname='Onderwerp' name='Onderwerp'  labelname='Onderwerp'/>
      <InsertForm classname='insertFormInput1' idname='Gebruiker' name='Gebruiker'  labelname='Gemeld door'/>
      <InsertForm classname='insertFormInput2'idname='Omschrijving' name='Omschrijving'  labelname='Omschrijving'/>
      <Link class="cameraButton" to="/camera" ><img src={cameraButton} /></Link>
      <div className='sbmBtnFlexBox'>
        <SubmitButton classname='sbmBtn sbmBtnDenied' submitname='Bevestig' />
        <SubmitButton classname='sbmBtn sbmBtnConfirm' submitname='Annuleer' />
      </div>
    </div>
    );
  }
  
  export default AddReparation;