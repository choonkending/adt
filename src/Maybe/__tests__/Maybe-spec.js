const { expect } = require('chai');
const { maybe, just, nothing } = require('../Maybe');

describe('Maybe', () => {
  describe('Fantasy Land', () => {
    describe('identity', () => {
      it('u.map(a => a) is equivalent to u', () => {
        expect(maybe.of(1).map(a => a)).to.deep.equal(maybe.of(1));
      });
    });

    describe('map', () => {
      it('u.map(x => f(g(x)) is equivalent to u.map(g).map(f)', () => {
        const f = x => x + 1;
        const g = x => x + 2;
        expect(maybe.of(2).map(x => f(g(x)))).to.deep.equal(maybe.of(2).map(g).map(f));
      });
    });

  });

  describe('fromNullable', () => {
    describe('when given null value', () => {
      it('should return nothing', () => {
        expect(maybe.fromNullable(null)).to.deep.equal(nothing);
      });
    });

    describe('when given non-null x', () => {
      it('should return Just x', () => {
        expect(maybe.fromNullable(1)).to.deep.equal(just(1));
      });
    });
  });

  describe('of', () => {
    it('when given value x', () => {
      it('should return Just x', () => {
        expect(maybe.of(1)).to.deep.equal(just(1));
      });
    });
  });

  describe('just', () => {
    describe('map with f', () => {
      it('should return some with f(value)', () => {
        expect(just(1).map(x => x + 1)).to.deep.equal(just(2));
      });
    });

    describe('getOrElse', () => {
      it('should return value in some', () => {
        expect(just(1).getOrElse(2)).to.deep.equal(1);
      });
    });
  });

  describe('nothing', () => {
    describe('map with f', () => {
      it('should return nothing', () => {
        expect(nothing.map(x => x + 1)).to.deep.equal(nothing);
      });
    });

    describe('getOrElse', () => {
      it('should return default value', () => {
        expect(nothing.getOrElse(2)).to.deep.equal(2);
      });
    });
  });
});
