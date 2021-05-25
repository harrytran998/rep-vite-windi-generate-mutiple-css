declare module '*.vue' {
  import { defineComponent } from 'vue'

  const component: ReturnType<typeof defineComponent>
  export default component
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

declare module '*.svg' {
  const src: string
  export default src
}
