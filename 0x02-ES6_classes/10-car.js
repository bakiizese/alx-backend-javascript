export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(br) {
    this._brand = br;
  }

  get motor() {
    return this._motor;
  }

  set motor(ct) {
    this._motor = ct;
  }

  get color() {
    return this._color;
  }

  set color(cr) {
    this._color = cr;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
