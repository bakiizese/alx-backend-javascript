export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(nm) {
    this._name = nm;
  }

  get code() {
    return this._code;
  }

  set code(cd) {
    this._code = cd;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
