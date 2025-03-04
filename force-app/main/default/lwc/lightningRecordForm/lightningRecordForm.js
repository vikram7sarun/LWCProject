import { LightningElement,api } from 'lwc';
// import OPP_OBJECT from '@salesforce/schema/Opportunity';
// import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
// import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
// import CLOSEDATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
// import EXPECTEDREVENUE_FIELD from '@salesforce/schema/Opportunity.ExpectedRevenue';
// import STAGENAME_FIELD from '@salesforce/schema/Opportunity.StageName';
// import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LightningRecordForm extends LightningElement 
{
    // objectAPIName=OPP_OBJECT;
    // fields = [NAME_FIELD,AMOUNT_FIELD,CLOSEDATE_FIELD,EXPECTEDREVENUE_FIELD,STAGENAME_FIELD]

    @api objectApiName;
    @api recordId;

    handleSuccess(event) {
        this.showToast('Success', 'Opportunity UpdatedSuccessful. Id -> '+event.detail.id, 'success','pester');
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

}