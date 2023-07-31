import { LightningElement, api } from "lwc";

export default class CarTile extends LightningElement {
  @api car;
  @api selectedCarId;

  handleCarSelect(event) {
    event.preventDefault();
    const carId = this.car.id;
    const carSelect = new CustomEvent("carselect", { detail: carId });
    this.dispatchEvent(carSelect);
  }
}
