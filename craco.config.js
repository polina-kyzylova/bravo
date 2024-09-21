const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "jsconfig",
        baseUrl: "./src",
        alias: {
          "@@/*": ("./src*"),
          "@assets/*": ("./src/assets/*"),
          "@components/*": ("./src/components/*"),
          "@pages/*": ("./src/components/pages/*"),
          "@organisms/*": ("./src/components/organisms/*"),
          "@templates/*": ("./src/components/templates/*"),
          "@molecules/*": ("./src/components/molecules/*")
        }
      }
    }
  ]
};
