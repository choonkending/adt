class Identity {
  constructor(x) {
    this.x = x;
  }

  static of(x) {
    return new Identity(x);
  }

  map(f) {
    return Identity.of(f(this.x));
  }
}

module.exports = Identity;

