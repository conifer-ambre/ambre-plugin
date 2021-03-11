import { App } from '@/types/store'
export default {
  install: (app: App) => {
    const array = require.context('@/components', false, /.vue$/)
    array.keys().forEach(item => {
      let file = array(item)
      file = file.default || file
      app.component('ambre-' + item.substring(2, item.lastIndexOf('.')).toLowerCase(), file)
    })
  }
}
