import { SFCWithInstall } from '@lalala/utils'
import type { App } from 'vue'
import Button from './Button.vue'

Button.install = (app: App) => {
  app.component(Button.name, Button)
}

const _Button: SFCWithInstall<typeof Button> = Button as SFCWithInstall<typeof Button>

export * from './types'
export { _Button as AButton }
export default _Button
