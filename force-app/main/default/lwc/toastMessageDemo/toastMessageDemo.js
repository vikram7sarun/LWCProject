import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ToastMessageDemo extends LightningElement {

    handleSuccessClick() {
        this.showToast('Success', 'Account Creation Successful.', 'success','pester');
    }

    handleErrorClick() {
        this.showToast('Error', 'Account Creation has an Error.', 'error','sticky');
    }

    handleInfoClick() {
        this.showToast2('Info', 'Account Creation Info.{0}{1}', 'info','pester',['salesforce',{url:"https://login.salesforce.com",label:"Click Me!"}]);
    }
    
    handleWarningClick() {
        this.showToast('Warning', 'Account Creation Warning.', 'warning');
    }

    showToast(title, message, variant,mode) 
    {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
            mode: mode
        });
        this.dispatchEvent(event);
    }

    showToast2(title, message, variant,mode,messageData) 
    {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
            mode: mode,
            messageData:messageData
        });
        this.dispatchEvent(event);
    }
}