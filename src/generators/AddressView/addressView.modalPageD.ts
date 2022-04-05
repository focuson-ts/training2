/* This is the modal page declaration */
import {ExampleModalPage} from "../common";
import {addressViewFullDomainDD} from "./addressView.dataD";

export const addressViewModalPagePD: ExampleModalPage = {
    name: 'AddressViewModalPage',
    pageType: 'ModalPage',
    modes: [ 'edit' ],
    /** How we display the page.*/
    display: { target: 'temp', dataDD: addressViewFullDomainDD, importFrom: 'AddressViewMainPage' },
    /** As well as displaying/editing the data we have these buttons. These are passed to layout */
    buttons: {
        cancel: { control: 'ModalCancelButton' },
        commit: { control: 'ModalCommitButton' }
    }
}