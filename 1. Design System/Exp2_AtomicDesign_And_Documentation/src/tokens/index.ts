// ============================================================
// 📁 src/tokens/index.ts
// ============================================================
// نجمع كل الـ Tokens في ملف واحد للاستيراد السهل.
// بدلًا من: import { colorTokens } from './tokens/colors'
// نكتب:    import { colorTokens } from './tokens'
// ============================================================

export { colorTokens }         from "./colors";
export { typographyTokens }    from "./typography";
export { spacingTokens, borderRadiusTokens, shadowTokens, zIndexTokens, transitionTokens } from "./spacing";

// نجمع كل شيء في object واحد لمن يريد الاستخدام العام
import { colorTokens }      from "./colors";
import { typographyTokens } from "./typography";
import { spacingTokens, borderRadiusTokens, shadowTokens } from "./spacing";

export const tokens = {
  color:        colorTokens,
  typography:   typographyTokens,
  spacing:      spacingTokens,
  borderRadius: borderRadiusTokens,
  shadow:       shadowTokens,
} as const;

export type Tokens = typeof tokens;
