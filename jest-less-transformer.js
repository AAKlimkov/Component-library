const { createJestPreset } = require("ts-jest");

const tsJestTransformer = createJestPreset();

module.exports = {
  process(src, filename, config, options) {
    if (filename.match(/\.less$/)) {
      // Transform Less files using less-loader and identity-obj-proxy
      const transformed = tsJestTransformer.transform(
        src,
        filename,
        config,
        options,
      );
      return `module.exports = ${JSON.stringify(transformed)}`;
    }
    return src;
  },
};
