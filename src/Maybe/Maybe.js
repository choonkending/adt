class Just {
  constructor(value) {
    this.value = value;
  }

  map(f) {
    return new Just(f(this.value));
  }

  getOrElse(defaultValue) {
    return this.value;
  }
}

class Nothing {
  map(f) {
    return this;
  }

  getOrElse(defaultValue) {
    return defaultValue;
  }
}

const just = x => new Just(x);
const nothing = new Nothing();
const maybe = {
  of: x => just(x),
  fromNullable: x => (x === undefined || x === null) ? nothing : just(x)
};

module.exports = { maybe, just, nothing };

