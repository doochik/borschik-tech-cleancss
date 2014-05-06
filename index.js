var cssbase = require('borschik/lib/techs/css');

exports.Tech = cssbase.Tech.inherit({

    minimize: function(content) {
        var CleanCSS = require('clean-css');

        var CleanCSSOptions = this.opts.techOptions.cleancss || {};
        CleanCSSOptions.noRebase = typeof CleanCSSOptions.noRebase === 'undefined' ? false : CleanCSSOptions.noRebase;
        CleanCSSOptions.processImport = typeof CleanCSSOptions.processImport === 'undefined' ? false : CleanCSSOptions.processImport;

        return new CleanCSS(CleanCSSOptions).minify(content);
    }

});
