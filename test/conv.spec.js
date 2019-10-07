/* global describe, it, before */

import chai from 'chai';
import {conv} from '../dist/main.js';

chai.expect();

const expect = chai.expect;

let lib;

describe('Given traditional chinese', () => {
  describe('converting', () => {
    it('should return simplified chinese', () => {
      expect(conv.tc2sc("傌")).to.be.equal("㐷");
      expect(conv.tc2sc("傌𤳷傌")).to.be.equal("㐷𪽝㐷"); 
    });
  });
});

describe('Given simplified chinese', () => {
  describe('cconverting', () => {
    it('should return traditional chinese', () => {
      expect(conv.sc2tc("㐷")).to.be.equal("傌");
    });
  });
});