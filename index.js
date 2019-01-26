var cssbase = require('borschik/lib/techs/css');

exports.Tech = cssbase.Tech.inherit({

    minimize: function(content) {
        var CleanCSS = require('clean-css');

        return new CleanCSS(this.opts.techOptions.cleancss).minify(content).styles;
    }

});
