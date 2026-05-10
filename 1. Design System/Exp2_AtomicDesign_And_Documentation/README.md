# 🎨 Design System — مشروع تعليمي

مشروع React + TypeScript يشرح بناء Design System من الصفر.

---

## 🗂️ هيكل المشروع

```
my-design-system/
├── .storybook/
│   ├── main.ts           ← إعداد Storybook
│   └── preview.ts        ← استيراد Tokens CSS
├── src/
│   ├── tokens/
│   │   ├── colors.ts     ← Color Tokens
│   │   ├── typography.ts ← Typography Tokens
│   │   ├── spacing.ts    ← Spacing, Radius, Shadow
│   │   ├── tokens.css    ← CSS Custom Properties
│   │   └── index.ts      ← Barrel Export
│   └── components/
│       ├── atoms/
│       │   ├── Button/   ← Button.tsx + .module.css + .stories.tsx
│       │   └── Badge/    ← Badge.tsx  + .module.css + .stories.tsx
│       ├── molecules/
│       │   └── UserCard/ ← UserCard.tsx + .module.css + .stories.tsx
│       └── index.ts      ← Barrel Export
└── package.json
```

---

## 🚀 التشغيل

```bash
npm install
npm run storybook   # يفتح على http://localhost:6006
```

---

## 📚 المفاهيم المُغطّاة

### 1. Design Tokens
القيم الخام للنظام البصري — تُعرَّف مرة واحدة وتُستخدم في كل مكان.

```ts
// colors.ts
export const colorTokens = {
  primary: { 500: "#3B82F6" },
  success: { base: "#10B981" },
};

// tokens.css — نحوّلها لـ CSS Variables
:root {
  --color-primary-500: #3B82F6;
}
```

**لماذا؟** بدلاً من `color: #3B82F6` في 50 مكان،  
نكتب `color: var(--color-primary-500)` ونُغيّرها من مكان واحد.

---

### 2. Atomic Design

| المستوى | الوصف | أمثلة |
|---------|-------|-------|
| Atoms | أصغر وحدة | Button, Badge, Input |
| Molecules | تجمع Atoms | UserCard, SearchBar |
| Organisms | تجمع Molecules | Navbar, DataTable |
| Templates | هيكل الصفحة | DashboardLayout |

---

### 3. Variants & Sizes

```tsx
// نعرّف الـ variants بـ TypeScript Union Types
type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize    = "sm" | "md" | "lg";

// ونبني الـ className ديناميكيًا
const classes = [
  styles.btn,
  styles[`btn--${variant}`],  // btn--primary
  styles[`btn--${size}`],     // btn--md
].join(" ");
```

---

### 4. CSS Modules

كل مكوّن له ملف `.module.css` خاص به — بدون تعارض بين الأسماء.

```css
/* Button.module.css */
.btn--primary {
  background-color: var(--color-primary-500);  /* من tokens! */
  color: var(--color-neutral-0);
}
.btn--primary:hover {
  background-color: var(--color-primary-600);
}
```

---

### 5. Storybook Stories

```tsx
// Button.stories.tsx
const meta: Meta<typeof Button> = {
  title: "Atoms/Button",  // المسار في sidebar
  component: Button,
  tags: ["autodocs"],     // توليد توثيق تلقائي
};

// كل story = حالة استخدام
export const AllVariants: Story = {
  render: () => (
    <div>
      <Button variant="primary">Primary</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};
```

---

## 💡 نقاط مهمة

- **Tokens CSS** تُستورد في `.storybook/preview.ts` حتى تتوفر في كل story
- **Barrel exports** (`index.ts`) تُبسّط الاستيراد
- **CSS Modules** تمنع تعارض أسماء الكلاسات
- **TypeScript types** تُوثّق الـ API وتمنع الأخطاء في compile time
