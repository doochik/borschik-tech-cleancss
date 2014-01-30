var cssbase = require('borschik/lib/techs/css');

exports.Tech = cssbase.Tech.inherit({

    minimize: function(content) {
        var CleanCSS = require('clean-css');
        var CleanCSSOptions = {
            noRebase: false,
            processImport: false
        };
        return new CleanCSS(CleanCSSOptions).minify(content);
    }

});
