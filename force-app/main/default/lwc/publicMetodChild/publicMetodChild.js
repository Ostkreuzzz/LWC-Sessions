import { LightningElement,track, api } from 'lwc';

export default class CheckboxGroupBasic extends LightningElement {
    value = ['Red'];
    options = [
        { label: 'Red Marker', value: 'red' },
        { label: 'Blue Marker', value: 'blue' },
        { label: 'Green Marker', value: 'green' },
        { label: 'Black Marker', value: 'black' },
    ];

    @api
    selectCheckBox(checkboxValue){
       const selectedCheckBox =  this.options.find(checkbox => {
        return checkboxValue === checkbox.value;
       });

       if(selectedCheckBox){
        this.value = selectedCheckBox;
        return "Successfully checked";
       }
        return "No checkbox found";
    }
}
