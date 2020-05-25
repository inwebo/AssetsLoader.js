const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: (pathData) => {
            return (pathData.chunk.name === 'demo') ? 'docs/assets/js/[name].min.js' : 'dist/[name].min.js';
        },
        path: path.resolve(__dirname, '.'),
    },
};