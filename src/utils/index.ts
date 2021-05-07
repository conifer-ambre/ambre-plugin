import { App, Context } from '@/types/store'
export default {
  ascll: [
    `      ___           ___           ___           ___           ___     
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
  ],
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
  }
}
