export type ComponentVariant = 'outline' | 'text' | 'solid' | 'link'

export type DefaultFactory<T> = (props: Record<string, unknown>) => T | null | undefined

export interface CommonProps {
  variant?: ComponentVariant
  size?: ComponentSize
}

export type SFCWithInstall<T> = T & { install(app: any): void }
