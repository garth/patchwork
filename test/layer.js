'use strict';

var expect = require('chai').expect;

var Layer = require('../lib/layer.js');

describe('Layer', function () {

  describe('rev', function () {

    it('should generate a new rev when not provided', function () {
      var layer = new Layer();
      expect(layer.rev).to.have.length(25);
    });

    it('should accept an existing rev when provided', function () {
      var layer = new Layer({ rev: 'ci9mnxj840000gajxfe45ur5o' });
      expect(layer.rev).to.equal('ci9mnxj840000gajxfe45ur5o');
    });

    it('should be unique', function () {
      var layer = new Layer();
      expect(layer.rev).to.not.equal(new Layer().rev);
      expect(layer.rev).to.not.equal(new Layer().rev);
      expect(layer.rev).to.not.equal(new Layer().rev);
      expect(layer.rev).to.not.equal(new Layer().rev);
      expect(layer.rev).to.not.equal(new Layer().rev);
    });

    it('should be sequentially ordered', function () {
      var revs = [
        new Layer().rev,
        new Layer().rev,
        new Layer().rev,
        new Layer().rev,
        new Layer().rev
      ];
      var clone = revs.slice(0);
      expect(revs).to.eql(clone);
      expect(revs).to.eql(clone.sort());
    });

  });

});
