import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';

export default class HelloLwc extends LightningElement {

    async handleAlertClick() {
        await LightningAlert.open({
            message: 'this is the alert message',
            theme: 'success', // a red theme intended for error states
            label: 'success!', // this is the header text
        });
        //Alert has been closed
    }

    
}