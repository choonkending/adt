const { expect } = require('chai');
const Identity = require('../Identity');

describe('identity', () => {
  describe('Fantasy Land', () => {
    describe('identity', () => {
      it('u.map(a => a) is equivalent to u', () => {
        expect(Identity.of(1).map(a => a)).to.deep.equal(Identity.of(1));
      });
    });

    describe('map', () => {
      it('u.map(x => f(g(x)) is equivalent to u.map(g).map(f)', () => {
        const f = x => x + 1;
        const g = x => x + 2;
        expect(Identity.of(2).map(x => f(g(x)))).to.deep.equal(Identity.of(2).map(g).map(f));
      });
    });

    describe('of', () => {
      describe('given a value f', () => {
        const f = Identity.of(3);
        it('can access its type representative via the constructor property', () => {
          expect(f.constructor.of(4)).to.deep.equal(Identity.of(4));
        });
      });
    });
  });

});
