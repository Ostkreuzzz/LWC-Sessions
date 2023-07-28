import { LightningElement, api, track, wire } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import getCars from "@salesforce/apex/carSearchResultController.getCars";

export default class CarSearchResult extends LightningElement {
  @api carTypeId;
  @track cars;

  @wire(getCars, { carTypeId: this.carTypeId })
  wiredCars({ data, error }) {
    if (data) {
      this.cars = data;
    } else if (error) {
      this.ShowToastEvent("ERROR", error.body.message, "error");
    }
  }

  ShowToastEvent(title, message, variant) {
    const evt = new ShowToastEvent({
      title: title,
      message: message,
      variant: variant
    });
    this.dispatchEvent(evt);
  }

  get carsFound() {
    if (this.cars) {
      return true;
    }
    return false;
  }
}
