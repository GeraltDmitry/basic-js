
module.exports = class DepthCalculator {
    calculateDepth(arr) {
      let depthCount = 1;  
      arr.forEach(elem => {
        if (Array.isArray(elem)) {
          const nestedDepth = this.calculateDepth(elem);
  
          if (depthCount < 1 + nestedDepth) {
            depthCount = 1 + nestedDepth;
          }
        }
      });  
      return depthCount;
    }
  };
