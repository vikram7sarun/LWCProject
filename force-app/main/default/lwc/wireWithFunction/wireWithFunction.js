import { LightningElement, wire, api} from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_NAME_FIELD from '@salesforce/schema/Account.Name';


export default class WireWithFunction extends LightningElement {

    @api recordId;

    @wire(getRecord, {recordId: "$recordId", fields:[ACCOUNT_NAME_FIELD]})
    wiredAccount({error,data})
    {
        if(data)
        {
            console.log("Getting Data from wire with function");
            this.accounts = data;
        }else{
            this.error = error;
            console.log("Error : "+error.body.message)
        }
    }

}