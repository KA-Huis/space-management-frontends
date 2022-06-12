import InsertForm from './InsertForm.js';
import SubmitButton from './SubmitButton.js';
import PopupHeader from './PopupHeader.js';

function EditReparation() {
    return (
      <div className='backgroundImg'>
      <PopupHeader title='Status' subtitle='Bijwerken'/>
      <InsertForm classname='insertFormInput insertFormInput1' idname='Status' name='Reparatie Status' labelname='Reparatie Status'/>
      <InsertForm classname='insertFormInput insertFormInput3'idname='Opmerking' name='Opmerkingen'  labelname='Opmerkingen'/>
      <div className='sbmBtnFlexBox'>
        <SubmitButton classname='sbmBtn sbmBtnDenied' submitname='Bevestig' />
        <SubmitButton classname='sbmBtn sbmBtnConfirm' submitname='Annuleer' />
      </div>
    </div>
    );
  }
  
  export default EditReparation;