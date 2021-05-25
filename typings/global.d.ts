// Global compile-time constants
declare let __COMMIT__: string //
declare let __VERSION__: string
declare let __DEV__: boolean

declare function parseInt(s: string | number, radix?: number): number

declare function parseFloat(string: string | number): number

declare type Nullable<T> = T | null
declare type Undefinable<T> = T | undefined
declare type Recordable<T = any> = Record<string, T>
declare type ComponentSize = 'large' | 'medium' | 'small' | 'mini'
