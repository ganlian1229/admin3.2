const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')

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
    configureWebpack: {
        plugins: [
            AutoImport({
                resolvers: [],
                imports: ['vue', 'vue-router', 'pinia'],//需要自动导入
                dts: "src/auto-imports.d.ts"
            }),
            Components({
                // 指定组件位置，默认是src/components
                dirs: ['src/componentsGlobal'],//自动导入自定义组件
                dts: "src/components.d.ts"
            })
        ],
    },
};
