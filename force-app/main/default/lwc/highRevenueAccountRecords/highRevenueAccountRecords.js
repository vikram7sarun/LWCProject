import { LightningElement, wire } from 'lwc';
import HIGH_REVENUE_ACCOUNT from '@salesforce/apex/AccountController.getHighRevenueAccountRecords';

export default class HighRevenueAccountRecords extends LightningElement {
    accountToDisplay = [];

    @wire(HIGH_REVENUE_ACCOUNT)
    wiredAccounts({ data, error }) {
        if (data) {
            this.accountToDisplay = [...data]; // Immutable update
        } else if (error) {
            console.error('Error fetching high revenue accounts:', error);
        }
    }
}
