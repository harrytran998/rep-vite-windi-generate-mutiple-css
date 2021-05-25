import type { ComponentVariant } from '@lalala/utils';
import { PropType } from 'vue';
import { ButtonNativeType } from './types';
declare const _default: import("vue").DefineComponent<{
    nativeType: {
        default: string;
        type: PropType<ButtonNativeType>;
        validator: (val: string) => boolean;
    };
    isDisabled: BooleanConstructor;
    isFullWidth: BooleanConstructor;
    isLoading: BooleanConstructor;
    useRipple: {
        type: BooleanConstructor;
        default: boolean;
    };
    variant: {
        type: PropType<ComponentVariant>;
        default: string;
        validator: (variant: string) => boolean;
    };
    size: {
        type: PropType<ComponentSize>;
        default: string;
        validator: (size: string) => boolean;
    };
}, {
    buttonHeight: import("vue").ComputedRef<string>;
    textButton: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    nativeType: ButtonNativeType;
    isDisabled: boolean;
    isFullWidth: boolean;
    isLoading: boolean;
    useRipple: boolean;
    variant: ComponentVariant;
    size: ComponentSize;
} & {}>, {
    nativeType: ButtonNativeType;
    isDisabled: boolean;
    isFullWidth: boolean;
    isLoading: boolean;
    useRipple: boolean;
    variant: ComponentVariant;
    size: ComponentSize;
}>;
export default _default;
