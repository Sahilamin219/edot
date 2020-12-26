const siteMetadata = require('./site-metadata.json')
const sass = require('node-sass');
const sassUtils = require('node-sass-utils')(sass);

module.exports = {
    pathPrefix: '/',
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                functions: {
                    "getPaletteKey($key)": function(sassKey) {
                        function hexToRgb(hex) {
                            // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
                            let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
                            hex = hex.replace(shorthandRegex, function(m, r, g, b) {
                                return r + r + g + g + b + b;
                            });

                            let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                            return result ? {
                                r: parseInt(result[1], 16),
                                g: parseInt(result[2], 16),
                                b: parseInt(result[3], 16)
                            } : null;
                        }
                        let sassParams = siteMetadata.palettes[siteMetadata.palette].sass;
                        let key = sassKey.getValue();
                        let value = sassParams[key];
                        let colorRegExp = /^#(?:[a-f\d]{3}){1,2}$/i;
                        let result;
                        if (colorRegExp.test(value)) {
                            result = hexToRgb(value);
                            result = new sass.types.Color(result.r, result.g, result.b);
                        } else {
                            result = sassUtils.castToSass(value)
                        }
                        return result;
                    }
                }}
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {}
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        }
    ]
};
