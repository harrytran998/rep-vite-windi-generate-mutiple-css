import type { CommonProps } from '@lalala/utils'

export interface ButtonProps extends Partial<CommonProps> {
  nativeType?: 'submit' | 'reset' | 'button'
  isFullWidth?: boolean
  isLoading?: boolean
  isDisabled?: boolean
  useRipple?: boolean
}

export type ButtonNativeType = 'button' | 'submit' | 'reset'
