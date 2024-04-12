export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(cd) {
    if (typeof cd !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = cd;
  }

  get name() {
    return this._name;
  }

  set name(nm) {
    if (typeof nm !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = nm;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
