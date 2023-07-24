import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResult;
    @track previousResult = [];
    @track showPreviousResults = false;

    firstNumber;
    secondNumber;
    numberChangeHandler(event){
        const inputBoxName = event.target.name;
        if(inputBoxName === 'firstNumber'){
            this.firstNumber = event.target.value;
        }else if (inputBoxName === 'secondNumber'){
            this.secondNumber = event.target.value;
        }
    }
    addHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = 'Result of '+firstN+' + ' +secondN+' is ' + (firstN+secondN);
        this.previousResult.push(this.currentResult);
        
    }

    subtractHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = 'Result of '+firstN+' - ' +secondN+' is ' + (firstN-secondN);
        this.previousResult.push(this.currentResult);
    }

    multiplyHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = 'Result of '+firstN+' * ' +secondN+' is ' + (firstN*secondN);
        this.previousResult.push(this.currentResult);
    }

    divdisionHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        this.currentResult = 'Result of '+firstN+' / ' +secondN+' is ' + (firstN/secondN);
        this.previousResult.push(this.currentResult);
    }
    showPreviousResultToggle(event){
        this.showPreviousResults = event.target.checked;
    }
}