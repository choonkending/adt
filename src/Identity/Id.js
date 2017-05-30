'use strict';
const Id = value => ({
  map: f => Id(f(value)),
  ap: i => i.map(value),
  get: () => value,
  inspect: () => `Id(${value})`
});

Id.of = x => Id(x);

module.exports = Id;

