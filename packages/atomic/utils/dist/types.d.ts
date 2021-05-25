declare type ComponentVariant = 'outline' | 'text' | 'solid' | 'link';
declare type DefaultFactory<T> = (props: Record<string, unknown>) => T | null | undefined;
interface CommonProps {
    variant?: ComponentVariant;
    size?: ComponentSize;
}
declare type SFCWithInstall<T> = T & {
    install(app: any): void;
};

export { CommonProps, ComponentVariant, DefaultFactory, SFCWithInstall };
