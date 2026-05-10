// ============================================================
// 📁 .storybook/main.ts
// ============================================================
// إعداد Storybook: أين يبحث عن الـ stories وما الـ addons المُفعّلة
// ============================================================

import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  // أين يبحث Storybook عن ملفات الـ stories
  stories: ["../src/**/*.stories.@(ts|tsx)"],

  // الـ Addons المُضافة
  addons: [
    "@storybook/addon-essentials", // يشمل: Controls, Docs, Actions, Backgrounds, Viewport
    "@storybook/addon-interactions", // لاختبار التفاعلات
  ],

  // نستخدم Vite كـ bundler (أسرع من Webpack)
  framework: {
    name:    "@storybook/react-vite",
    options: {},
  },

  // تفعيل توليد الـ Docs تلقائيًا
  docs: {
    autodocs: "tag", // يُولّد docs لكل story تحمل الـ tag: ["autodocs"]
  },
};

export default config;
