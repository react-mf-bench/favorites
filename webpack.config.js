const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-mf",
    projectName: "favorites",
    webpackConfigEnv,
  });

  return merge(defaultConfig, {
    // customize the webpack config however you'd like to by adding to this object
  });
};
