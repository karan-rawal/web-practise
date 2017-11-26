const path = require('path');

module.exports = {
  process(src, filename) {
    const stringifiedFile = JSON.stringify(path.basename(filename));
    return `module.exports = ${stringifiedFile};`;
  },
};
