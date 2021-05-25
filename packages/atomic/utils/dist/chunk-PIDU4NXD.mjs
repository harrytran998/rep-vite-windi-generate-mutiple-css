// src/validator.ts
var ValidatorUi = {
  isValidComponentSize: (size) => ["large", "medium", "small", "mini"].includes(size),
  isValidVariant: (variant) => ["outline", "text", "solid", "link"].includes(variant)
};

export {
  ValidatorUi
};
