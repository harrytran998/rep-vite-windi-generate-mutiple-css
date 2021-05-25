"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/validator.ts
var ValidatorUi = {
  isValidComponentSize: (size) => ["large", "medium", "small", "mini"].includes(size),
  isValidVariant: (variant) => ["outline", "text", "solid", "link"].includes(variant)
};



exports.ValidatorUi = ValidatorUi;
