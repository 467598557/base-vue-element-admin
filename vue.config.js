let externals = {};
let IsProd = process.env.NODE_ENV == 'production';
let IsForTest = process.env.VUE_APP_FOR_TEST;
if(IsProd) {
    externals = {
        'vue': 'Vue',
        'axios': 'axios',
        'vue-router': 'VueRouter',
        'element-ui': 'ELEMENT',
        'jquery': '$',
        'echarts': 'echarts',
        'v-charts': 'VeIndex'
    }
}

module.exports = {
    baseUrl: IsProd ? (IsForTest ? "/testmcs" : "/mcs") : "./",
    configureWebpack: {
        devtool: IsProd ? '' : 'inline-source-map',
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
                'store': '@/store',
                'router': '@/router',
                'config': '@/config',
                'directives': '@/directives',
                'utils': '@/utils',
                'api': '@/api',
                'mixin': '@/mixin',
            }
        },
        externals
    },
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            commonText: `
                <script src="https://lib.baomitu.com/jquery/3.3.1/jquery.min.js"></script>
            `,
            propText: IsProd ? `
                <script src="https://lib.baomitu.com/vue/2.5.21/vue.min.js"></script>
                <script src="https://lib.baomitu.com/vue-router/3.0.2/vue-router.min.js"></script>
                <script src="https://lib.baomitu.com/element-ui/2.4.11/index.js"></script>
                <script src="https://lib.baomitu.com/axios/0.18.0/axios.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/v-charts/lib/index.min.js"></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/v-charts/lib/style.min.css">
            ` : ''
        }
    },
    productionSourceMap: IsProd
}

