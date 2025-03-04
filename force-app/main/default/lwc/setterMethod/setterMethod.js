import { api, LightningElement } from 'lwc';

export default class SetterMethod extends LightningElement {

    _customerName; // Private variable

    @api
    set customerName(value) {
        this._customerName = value.toUpperCase(); // Convert to uppercase
    }

    get customerName() {
        return this._customerName;
    }

}