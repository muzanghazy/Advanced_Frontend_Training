// ملف الـ Storybook لتوثيق الـ Button Component.
//
// ما هو Storybook؟
// أداة تعرض مكوناتك بشكل معزول (isolated) مع:
//   - Controls: تغيير الـ props مباشرة من الواجهة
//   - Docs: توثيق تلقائي من JSDoc وTypeScript types
//   - Actions: متابعة الأحداث (onClick, onChange...)
// ============================================================

import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

// ─── Meta ────────────────────────────────────────────────────
// يحدد إعدادات القصة العامة وكيف تظهر في Storybook sidebar
const meta: Meta<typeof Button> = {
  title: "Atoms/Button", // المسار في الـ sidebar
  component: Button,
  tags: ["autodocs"], // يولّد توثيقًا تلقائيًا

  // argTypes: تتحكم في كيفية عرض الـ props في Controls panel
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "ghost", "danger"],
      description: "النوع البصري للزر",
      table: {
        type: { summary: "ButtonVariant" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"],
      description: "حجم الزر",
      table: {
        type: { summary: "ButtonSize" },
        defaultValue: { summary: "md" },
      },
    },
    loading: {
      control: { type: "boolean" },
      description: "حالة التحميل - يُعطّل الزر ويُظهر spinner",
    },
    disabled: {
      control: { type: "boolean" },
      description: "تعطيل الزر",
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "يجعل الزر يملأ عرض الحاوية",
    },
    onClick: { action: "clicked" }, // يسجّل النقرات في Actions panel
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ─── Stories ─────────────────────────────────────────────────
// كل "Story" = حالة استخدام واحدة للمكوّن

/** الزر الأساسي بإعداداته الافتراضية */
export const Default: Story = {
  args: {
    children: "زر أساسي",
    variant: "primary",
    size: "md",
  },
};

/** عرض كل الـ Variants جنبًا إلى جنب */
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "جميع الـ variants المتاحة. استخدم `primary` للإجراء الرئيسي، و`danger` للإجراءات المدمّرة.",
      },
    },
  },
};

/** عرض كل الأحجام */
export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Button size="sm">صغير</Button>
      <Button size="md">متوسط</Button>
      <Button size="lg">كبير</Button>
    </div>
  ),
};

/** الزر في حالة التحميل */
export const Loading: Story = {
  args: {
    children: "جاري الحفظ...",
    loading: true,
    variant: "primary",
  },
};

/** الزر المعطّل */
export const Disabled: Story = {
  args: {
    children: "غير متاح",
    disabled: true,
  },
};

/** زر بأيقونة */
export const WithIcon: Story = {
  args: {
    children: "إضافة عنصر",
    leftIcon: <span>➕</span>,
    variant: "primary",
  },
};

/** زر يملأ العرض كاملًا */
export const FullWidth: Story = {
  args: {
    children: "تسجيل الدخول",
    fullWidth: true,
    variant: "primary",
    size: "lg",
  },
};

/** زر الخطر - مثال واقعي */
export const DangerExample: Story = {
  args: {
    children: "حذف الحساب",
    variant: "danger",
    leftIcon: <span>🗑️</span>,
  },
};
