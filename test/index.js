var expect = require('chai').expect;

var patchwork = require('../lib/index.js');

describe('patchwork', function () {

  describe('getPatchNumber', function () {
    it('should return a new patch number');
    it('should be sequentially ordered');
  }),

  describe('baseline()', function () {
    it('should accept an id, revision/patch number and object');
    it('should accept an id, new revision and new object');
  }),

  describe('clear()', function () {
    it('should remove an object and patches');
  }),

  describe('patch()', function () {
    it('should add a patch (with revision/patch number) on top of a baseline');
    it('should return the object state after patching');
  }),

  describe('getPatches()', function () {
    it('should get all patches made to an object after a given revision/patch number');
  }),

  describe('getObject()', function () {
    it('should get the current object state (with all known patches applied)');
    it('should get the object state at -n patches');
  })

});
