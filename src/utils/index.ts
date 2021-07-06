import { App, Context } from '@/types/store'
export default {
  install(app: App, context: Context) {
    context.keys().forEach((item: string) => {
      let file = context(item)
      file = file.default || file
      app.component(
        'ambre' +
          item
            .substring(2, item.lastIndexOf('.'))
            .replace(/([A-Z])/g, word => '-' + word.toLowerCase()),
        file
      )
    })
  },
  image(url: string) {
    return process.env.VUE_APP_IMG + url
  },
  output: (path: string) => ({
    filename: 'index.js',
    path,
    publicPath: '/'
  }),
  ethereum: async () => {
    const ethereum = window.ethereum
    if (ethereum) {
      return ethereum
    } else {
      return ethereum
    }
  },

  html: (extra: { title: string }) => ({
    title: extra.title,
    filename: 'index.html',
    template: './public/index.html'
  }),
  bar: () => ({
    name: 'AMBRE-VUE-CLI-NEXT',
    color: '#426AB3'
  }),
  define: (env: object) => {
    return {
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      'process.env': env
    }
  },
  // @ts-ignore：
  message: (network: any) => {
    const array: {
      address: string
    }[] = network[Object.keys(network)[0]].filter((element: { family: string }) => element.family === 'IPv4')
    return {
      compilationSuccessInfo: {
        messages: [
          `AMBRE-VUE-CLI-NEXT running at http://127.0.0.1:3316
    AMBRE-VUE-CLI-NEXT running at http://${array[0].address}:3316`
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
    }
  },
  resolve: (path: string) => ({
    extensions: ['.js', '.ts', '.vue', '.json', '.scss', '.css'],
    alias: { '@': path }
  }),
  options: (compiler: unknown) => ({
    mode: 'development',
    entry: './index.ts',
    devtool: 'inline-source-map',
    cache: true,
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
          test: /\.(png|jpe?g|gif|woff|woff2|ttf|otf|eot|svg|mp4|xlsx)$/i,
          loader: 'file-loader',
          options: { name: 'image/[name].[ext]', esModule: false }
        },
        {
          test: /\.(vue)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ambre-plugin/dist/loader/ambre-plugin.umd.js',
              options: {
                compiler
              }
            }
          ]
        }
      ]
    },
    devServer: {
      host: '0.0.0.0',
      quiet: true,
      stats: 'errors-only',
      compress: true,
      port: 3316
    }
  })
}
