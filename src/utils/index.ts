import { App, Context } from '@/types/store'
export default {
  install(app: App, context: Context) {
    context.keys().forEach((item: string) => {
      let file = context(item)
      file = file.default || file
      app.component('ambre-' + item.substring(2, item.lastIndexOf('.')).toLowerCase(), file)
    })
  },
  format(timestamp: number, format: string = 'yyyy-MM-dd hh:mm:ss') {
    // const date = new Date(timestamp)
    // if (/(y+)/.test(format)) {
    //   format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    // }
    // const object = {
    //   'M+': date.getMonth() + 1,
    //   'd+': date.getDate(),
    //   'h+': date.getHours(),
    //   'm+': date.getMinutes(),
    //   's+': date.getSeconds()
    // }
    // for (const key in object) {
    //   if (new RegExp(`(${key})`).test(format)) {
    //     const string = JSON.stringify(object[key]) + ''
    //     format = format.replace(
    //       RegExp.$1,
    //       RegExp.$1.length === 1 ? string : ('00' + string).substr(string.length)
    //     )
    //   }
    // }
    return format
  },
  output: (path: string) => ({
    filename: 'index.js',
    path,
    publicPath: ''
  }),
  html: () => ({
    title: 'ambre-vue-cli-next',
    filename: 'index.html',
    template: './public/index.html'
  }),
  bar: () => ({
    name: 'AMBRE-VUE-CLI-NEXT',
    color: '#426AB3'
  }),
  define: () => ({
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false
  }),
  message: () => ({
    compilationSuccessInfo: {
      messages: [
        `AMBRE-VUE-CLI-NEXT running at http://localhost:8080
    AMBRE-VUE-CLI-NEXT running at http://localhost:8080`
      ],
      notes: [
        `          ___           ___           ___           ___           ___     
             /\\  \\         /\\__\\         /\\  \\         /\\  \\         /\\  \\    
            /::\\  \\       /::|  |       /::\\  \\       /::\\  \\       /::\\  \\   
           /:/\\:\\  \\     /:|:|  |      /:/\\:\\  \\     /:/\\:\\  \\     /:/\\:\\  \\  
          /::\\ \\:\\  \\   /:/|:|__|__   /::\\ \\:\\__\\   /::\\ \\:\\  \\   /::\\ \\:\\  \\ 
         /:/\\:\\ \\:\\__\\ /:/ |::::\\__\\ /:/\\:\\ \\:|__| /:/\\:\\ \\:\\__\\ /:/\\:\\ \\:\\__\\
         \\/__\\:\\/:/  / \\/__/  /:/  / \\:\\ \\:\\/:/  / \\/_|::\\/:/  / \\:\\ \\:\\ \\/__/
              \\::/  /        /:/  /   \\:\\ \\::/  /     |:|::/  /   \\:\\ \\:\\__\\  
              /:/  /        /:/  /     \\:\\/:/  /      |:|\\/__/     \\:\\ \\/__/  
             /:/  /        /:/  /       \\::/__/       |:|  |        \\:\\__\\    
             \\/__/         \\/__/         \\/__/         \\|__|         \\/__/    `
      ]
    }
  }),
  resolve: (path: string) => ({
    extensions: ['.js', '.ts', '.vue', '.json', '.scss', '.css'],
    alias: { '@': path }
  }),
  options: {
    mode: 'development',
    entry: './index.ts',
    devtool: 'inline-source-map',
    stats: {
      assets: false,
      moduleAssets: false,
      builtAt: false,
      runtimeModules: false,
      dependentModules: false
    },
    module: {
      rules: [
        { test: /\.vue$/, use: [{ loader: 'vue-loader' }] },
        {
          test: /.ts$/,
          use: [{ loader: 'ts-loader', options: { appendTsSuffixTo: [/.vue$/] } }]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
        },
        {
          test: /\.(png|jpe?g|gif|woff|ttf|otf|eot|svg|mp4|xlsx)$/i,
          loader: 'file-loader',
          options: { name: 'image/[name].[ext]', esModule: false }
        }
      ]
    },
    devServer: {
      // host: '0.0.0.0',
      quiet: true,
      stats: 'errors-only',
      compress: true,
      port: 8080
    }
  }
}
