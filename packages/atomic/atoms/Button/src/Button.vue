<!--
:bg="`hover:indigo-700 ${variant === 'outline' ? 'indigo-600' : 'white'}`"
:text="`${variant === 'outline' ? 'indigo-600' : 'white'} center base`"
ring="focus:(2 indigo-500 opacity-50)"
-->

<template>
  <button
    v-bind="$attrs"
    :disabled="isDisabled"
    :type="nativeType"
    text="white center base"
    font="semibold"
    border="rounded-lg"
    shadow="md active:lg"
    ring="0 focus:ring-2 indigo-500 opacity-50"
    class="
      px-4
      w-auto
      transition
      ease-in
      duration-200
      hover:bg-indigo-700
      isabled:opacity-50
      focus:outline-none
    "
    :class="[isDisabled ? 'bg-indigo-300' : 'bg-indigo-600', buttonHeight]"
  >
    <slot />
    <!--@slot Use this slot to place content inside the button.-->
  </button>
</template>

<script lang="ts">
import { ValidatorUi } from '@lalala/utils'
import type { ComponentVariant } from '@lalala/utils'
import { computed, defineComponent, PropType } from 'vue'
import { ButtonNativeType } from './types'

export default defineComponent({
  name: 'AButton',
  inheritAttrs: false,
  props: {
    nativeType: {
      default: 'button',
      type: String as PropType<ButtonNativeType>,
      validator: (val: string) => ['button', 'submit', 'reset'].includes(val),
    },
    isDisabled: Boolean,
    isFullWidth: Boolean,
    isLoading: Boolean,
    useRipple: {
      type: Boolean,
      default: true,
    },
    variant: {
      type: String as PropType<ComponentVariant>,
      default: 'solid',
      validator: (variant: string) => ValidatorUi.isValidVariant(variant),
    },
    size: {
      type: String as PropType<ComponentSize>,
      default: 'medium',
      validator: (size: string) => ValidatorUi.isValidComponentSize(size),
    },
  },
  setup(props, ctx) {
    const buttonHeight = computed<string>(() => {
      switch (props.size) {
        case 'large':
          return 'h-12'

        case 'medium':
          return 'h-10'

        case 'small':
          return 'h-8'

        default:
          return 'h-6'
      }
    })
    console.log('sadas')

    const textButton = computed<string>(() => {
      switch (props.variant) {
        case 'outline':
        case 'text':
          return 'indigo-500 center base'

        case 'solid':
        default:
          return 'white center base'
      }
    })

    return { buttonHeight, textButton }
  },
})
</script>
