module.exports = {
    devServer: {
        disableHostCheck: true,
        port: 8085,
        open: true,
        hot: true
        // proxy: {
        //     //配置跨域
        //     '/request': {
        //         target: 'https://baby.yyooyi.com/api/mall-admin',
        //         // target: "http://192.168.0.125:8083",
        //         ws: true,
        //         changOrigin: true,
        //         pathRewrite: {
        //             '^/request': ''
        //         }
        //     }
        // }
    },
    assetsDir: './',
    publicPath: './',
    productionSourceMap: false,//不生成.map文件
};
