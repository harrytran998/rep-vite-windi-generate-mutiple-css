// eslint-disable-next-line @typescript-eslint/naming-convention
export const ValidatorUi = {
  isValidComponentSize: (size: string) => ['large', 'medium', 'small', 'mini'].includes(size),
  isValidVariant: (variant: string) => ['outline', 'text', 'solid', 'link'].includes(variant),
};
