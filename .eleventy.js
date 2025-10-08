module.exports = function(eleventyConfig) {
    // This will copy these folders to the output directory
    eleventyConfig.addPassthroughCopy("./css");
    eleventyConfig.addPassthroughCopy("./js");
    eleventyConfig.addPassthroughCopy("./Content");
    
    // Add collections for each language
    eleventyConfig.addCollection("en", function(collectionApi) {
        return collectionApi.getFilteredByGlob("en/**/*.md");
    });

    eleventyConfig.addCollection("de", function(collectionApi) {
        return collectionApi.getFilteredByGlob("de/**/*.md");
    });

    eleventyConfig.addCollection("it", function(collectionApi) {
        return collectionApi.getFilteredByGlob("it/**/*.md");
    });

    return {
        dir: {
            input: ".",
            includes: "_includes",
            data: "_data",
            output: "_site"
        },
        passthroughFileCopy: true,
        templateFormats: ["html", "njk", "md"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
    };
};
