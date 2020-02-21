const path = require('path')

console.log('Mode: ', process.env.NODE_ENV);
const mode = process.env.NODE_ENV;
let publicPath;


switch (mode) {
    case 'production':
        publicPath = '/dist';
        break;
    case 'develoment':
        publicPath = '/dist';
        break;
    default:
        publicPath = '/';
        break;
}

module.exports = {
    outputDir: path.resolve(__dirname, './../wwwroot/dist'),
    publicPath
}