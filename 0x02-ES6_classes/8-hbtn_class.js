export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(sz) {
    this._size = sz;
  }

  get location() {
    return this._location;
  }

  set location(lc) {
    this._location = lc;
  }

  [Symbol.toPrimitive](tn) {
    if (tn === 'number') {
      return this.size;
    }
    if (tn === 'string') {
      return this.location;
    }
    return this;
  }
}
