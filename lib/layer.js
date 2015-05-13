'use strict';

var cuid = require('cuid');

module.exports = function constructor(spec={}) {
  const
    { id, rev = cuid(), object, patch } = spec;

  return Object.freeze({
    id,
    rev,
    object,
    patch
  });
};
