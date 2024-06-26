import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(am) {
    if (typeof am !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = am;
  }

  get currency() {
    return this._currency;
  }

  set currency(cr) {
    if (!(cr instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = cr;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
