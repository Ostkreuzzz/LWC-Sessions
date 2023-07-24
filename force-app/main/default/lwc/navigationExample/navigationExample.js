import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationExample extends NavigationMixin(LightningElement) {

    openSFDXFacts(){
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attribotes : {
                url : 'https://sfdcfacts.com'
            }
        });
    }
}