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
  }
}
