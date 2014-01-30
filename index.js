var cssbase = require('borschik/lib/techs/css');

exports.Tech = cssbase.Tech.inherit({

    minimize: function(content) {
        return require('clean-css').process(content, {
            noRebase: false,
            processImport: false
        });
    }

});
