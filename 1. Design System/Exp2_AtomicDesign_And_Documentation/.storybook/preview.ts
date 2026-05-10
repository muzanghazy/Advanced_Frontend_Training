// ============================================================
// 📁 .storybook/preview.ts
// ============================================================
// إعداد العرض العام في Storybook:
// - استيراد الـ CSS Tokens ليُطبَّق على كل story
// - ضبط اتجاه النص للعربية
// ============================================================

import type { Preview } from "@storybook/react";

// ⬇️ المهم: نستورد ملف الـ tokens CSS حتى تتوفر المتغيرات في كل story
import "../src/tokens/tokens.css";

const preview: Preview = {
  parameters: {
    // ضبط الخلفيات المتاحة في الـ toolbar
    backgrounds: {
      default: "light",
      values: [
        { name: "light",     value: "#F9FAFB" },
        { name: "white",     value: "#FFFFFF" },
        { name: "dark",      value: "#111827" },
      ],
    },

    // أحجام الشاشة المتاحة للاختبار
    viewport: {
      defaultViewport: "responsive",
    },

    // إعدادات صفحة الـ Docs
    docs: {
      theme: undefined, // يمكن تخصيص theme هنا
    },

    // توجيه النصوص للعربية (RTL)
    html: {
      dir: "rtl",
    },
  },
};

export default preview;
