export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
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

  get length() {
    return this._length;
  }

  set length(ln) {
    if (typeof ln !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = ln;
  }

  get students() {
    return this._students;
  }

  set students(st) {
    if (!(st instanceof Array)) {
      throw new TypeError('Students must be an array');
    }
    if (!st.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array');
    }
    this._students = st;
  }
}
