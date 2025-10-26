module.exports = function(eleventyConfig) {
    // Pass through files
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("Content");
    eleventyConfig.addPassthroughCopy("*.ico");
    eleventyConfig.addPassthroughCopy("*.png");
    eleventyConfig.addPassthroughCopy("site.webmanifest");
    
    // Language collections
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
        pathPrefix: "/europrivacy-hub/",
        templateFormats: ["html", "njk", "md"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk"
    };
};
