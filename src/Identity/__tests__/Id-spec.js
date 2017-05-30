'use strict'
const { expect } = require('chai');
const Id = require('../Id');

describe('Id', () => {
  describe('Static land', () => {
    describe('Functor', () => {
      it('should obey Identity law', () => {
        expect(Id.of(1).map(x => x).get()).to.equal(Id.of(1).get())
      });

      it('should obey Composition law', () => {
        const f = x => x + 2;
        const g = x => x + 3;
        expect(Id.of(1).map(x => f(g(x))).get()).to.equal(Id.of(1).map(f).map(g).get());
      });
    });

    describe('Applicative', () => {
      it('should obey Identity law', () => {
        const v = Id.of('ken');
        expect(Id.of(x => x).ap(v).get()).to.equal(v.get());
      });

      it('should obey homomorphism law', () => {
        const f = x => x + 1;
        expect(Id.of(f).ap(Id.of(1)).get()).to.equal(Id.of(1).map(f).get());
      });

      it.skip('should obey the interchange law', () => {
        // Id.of(y).ap(u) === u.ap(A.of(f => f(y)));
        const u = Id.of(x => x + 1);
        const y = 1;
        expect(Id.of(y).ap(u)).to.equal(u.ap(Id.of(f => f(y))));
      });

      it.skip('should obey composition law', () => {
        const v = Id.of(x => x + 1);
        const u = Id.of(y => y + 1);
        const a = Id.of(3);
        expect(v.ap(u.ap(a.map(f => g => x => f(g(x)))))).to.equal(v.ap(u).ap(a));
      });
    });
  });
});
