import utils from '@/utils/index'
import { App } from '@/types/store'
const context = require.context('@/components', true, /.vue$/)
export default {
  install: (app: App) => {
    utils.install(app, context)
  }
}
