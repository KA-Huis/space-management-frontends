import InsertForm from './InsertForm.js';
import SubmitButton from './SubmitButton.js';
import PopupHeader from './PopupHeader.js';

function EditProfile() {
    return (
      <div className='backgroundImg'>
      <PopupHeader title='Profiel' subtitle='Wijzigen'/>
      <InsertForm classname='insertFormInput insertFormInput1' idname='Voornaam' name='Voornaam' labelname='Voornaam'/>
      <InsertForm classname='insertFormInput insertFormInput1'idname='Achternaam' name='Achternaam'  labelname='Achternaam'/>
      <InsertForm classname='insertFormInput insertFormInput1'idname='Afdeling' name='Afdeling'  labelname='Afdeling'/>
      <InsertForm classname='insertFormInput insertFormInput1' idname='Leeftijd' name='Leeftijd' labelname='Leeftijd'/>
      <InsertForm classname='insertFormInput insertFormInput1'idname='Mail' name='Mail'  labelname='Mail'/>
      <InsertForm classname='insertFormInput insertFormInput1'idname='Groep' name='Groep'  labelname='Groep'/>
      <div className='sbmBtnFlexBox'>
        <SubmitButton classname='sbmBtn sbmBtnDenied' submitname='Bevestig' />
        <SubmitButton classname='sbmBtn sbmBtnConfirm' submitname='Annuleer' />
      </div>
    </div>
    );
  }
  
  export default EditProfile;