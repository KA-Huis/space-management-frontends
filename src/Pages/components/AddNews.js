import InsertForm from './InsertForm.js';
import SubmitButton from './SubmitButton.js';
import PopupHeader from './PopupHeader.js';

function AddNews() {
    return (
      <div className='backgroundImg'>
      <PopupHeader title='Nieuws Artikel' subtitle='Aanmaken'/>
      <InsertForm classname='insertFormInput insertFormInput1' idname='Auteur' name='Auteur' labelname='Auteur'/>
      <InsertForm classname='insertFormInput insertFormInput1'idname='Afdeling' name='Kies een Afdeling'  labelname='Afdeling'/>
      <InsertForm classname='insertFormInput insertFormInput1'idname='Titel' name='Titel'  labelname='Titel'/>
      <InsertForm classname='insertFormInput insertFormInput3'idname='Omschrijving' name='Omschrijving'  labelname='Omschrijving'/>
      <div className='sbmBtnFlexBox'>
        <SubmitButton classname='sbmBtn sbmBtnDenied' submitname='Bevestig' />
        <SubmitButton classname='sbmBtn sbmBtnConfirm' submitname='Annuleer' />
      </div>
    </div>
    );
  }
  
  export default AddNews;