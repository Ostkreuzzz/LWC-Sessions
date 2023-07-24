import { LightningElement, track } from 'lwc';

export default class Render extends LightningElement {
    @track displayDiv = false;
    @track cityList = ['Jaipur', 'Bangluru'];
    showDivHandler(event){
        this.displayDiv = event.target.check;
    }
 
}