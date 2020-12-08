const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setResourceRoot(process.env.APP_BASENAME);

mix.copyDirectory("resources/images", "public/images");

mix.react("resources/js/app.js", "public/js");

mix.sass("resources/sass/app.scss", "public/css");

mix.extract();

if (mix.config.production) {
    mix.version();
}

//mix.dump();
