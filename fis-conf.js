fis.match('**/*.less', {
    rExt: '.css', // from .less to .css
    parser: fis.plugin('less-2.x', {}),
    postprocessor: fis.plugin('autoprefixer', {
        browsers: ['last 5 versions']
    })
});


