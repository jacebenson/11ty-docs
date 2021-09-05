const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};