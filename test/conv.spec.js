/* global describe, it, before */

import chai from 'chai';
import {conv} from '../dist/main.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given traditional chinese', () => {
  describe('converting', () => {
    it('should return simplified chinese', () => {
      expect(conv.tc2sc("㑮")).to.be.equal("㗷");
    });
  });
});

describe('Given simplified chinese', () => {
  describe('cconverting', () => {
    it('should return traditional chinese', () => {
      expect(conv.tc2sc("㐷")).to.be.equal("傌");
    });
  });
});