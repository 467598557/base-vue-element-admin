const {resolve} = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            'assets': resolve(__dirname, 'src', 'assets'),
            'components': resolve(__dirname, 'src', 'components'),
            'views': resolve(__dirname, 'src', 'views'),
            'store': resolve(__dirname, 'src', 'store'),
            'router': resolve(__dirname, 'src', 'router'),
            'config': resolve(__dirname, 'src', 'config'),
            'directives': resolve(__dirname, 'src', 'directives'),
            'utils': resolve(__dirname, 'src', 'utils'),
            'api': resolve(__dirname, 'src', 'api'),
            'mixin': resolve(__dirname, 'src', 'mixin'),
        }
    }
}
