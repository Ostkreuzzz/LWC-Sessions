import { LightningElement,track,api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHN_FIELD from '@salesforce/schema/Account.Phone';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';


export default class AccountRecordForm extends LightningElement {
    @api recordId;
    @api objectApiName;
    fieldsArray = [NAME_FIELD, PHN_FIELD, WEBSITE_FIELD];

    successHandler(event){
        this.recordId = event.detail.id;
    }
}