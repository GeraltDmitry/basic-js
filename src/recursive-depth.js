
module.exports = class DepthCalculator {
    depthCalculate(arr) {
      let depthCount = 1;  
      arr.forEach(elem => {
        if (Array.isArray(elem)) {
          const depthNested = this.depthCalculate(elem);
  
          if (depthCount < 1 + depthNested) {
            depthCount = 1 + depthNested;
          }
        }
      });  
      return depthCount;
    }
  };
