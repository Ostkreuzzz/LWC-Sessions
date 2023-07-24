import { LightningElement, track } from 'lwc';

export default class PublicMetodParent extends LightningElement {
    @track value;

    checkBoxSelectHandler(){
        const childComponent = this.template.querySelector('c-public-method-child')
        childComponent.selectCheckBox(this.value);
    }
}