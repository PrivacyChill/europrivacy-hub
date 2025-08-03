module.exports = function(eleventyConfig) {
    // Set input and output directories
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("downloads");
    eleventyConfig.addPassthroughCopy("Content"); // Copy content data as well
    eleventyConfig.addPassthroughCopy("img"); // Copy images

    // Add a collection for each language
    eleventyConfig.addCollection("en", function(collectionApi) {
        return collectionApi.getFilteredByGlob("*.njk");
    });

    eleventyConfig.addCollection("de", function(collectionApi) {
        return collectionApi.getFilteredByGlob("*.njk");
    });

    eleventyConfig.addCollection("it", function(collectionApi) {
        return collectionApi.getFilteredByGlob("*.njk");
    });

    // Configure Eleventy to use Nunjucks for HTML and Markdown
    return {
        dir: {
            input: ".",
            includes: "_includes",
            data: "_data",
            output: "_site"
        },
        templateFormats: ["html", "njk", "md"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        pathPrefix: "/"
    };
};