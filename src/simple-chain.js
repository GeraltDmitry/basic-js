const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLong() {
    return this.chain.length;
  },

  addLink(tmp) {
    this.chain.push(tmp === undefined ? ' ' : tmp);
    return this;
  },

  removeLink(location) {
    if (location > this.chain.length || location < 1) {
      this.chain = [];
      throw new Error('Link does not exist.')
    }
    this.chain.splice(location - 1, 1);
    return this;
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let res = '';
    for (let i = 0; i < this.chain.length; i++) {
      res = res + `( ${this.chain[i]} )~~`;
    }
    res = res.slice(0, -2);
    this.chain = [];
    return res;
  }
};

module.exports = chainMaker;
