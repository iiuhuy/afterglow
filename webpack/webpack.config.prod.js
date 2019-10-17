const merge = require("webpack-merge");
const baseConfig = require("./webpack.common.js");

console.log(__dirname);
module.exports = merge(baseConfig, {
  mode: "production"
});
