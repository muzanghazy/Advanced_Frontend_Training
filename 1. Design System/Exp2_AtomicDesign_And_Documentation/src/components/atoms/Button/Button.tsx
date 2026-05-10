// ============================================================
// 📁 src/components/atoms/Button/Button.tsx
// ============================================================
// الـ Atom الأساسي: Button
//
// مبدأ Atomic Design:
//   Atoms → أصغر وحدة قابلة للاستخدام (Button, Input, Badge...)
//   Molecules → تجمع عدة Atoms (SearchBar = Input + Button)
//   Organisms → تجمع Molecules (Navbar, Form, Card)
//   Templates → هيكل الصفحة
//   Pages → الصفحة الفعلية
// ============================================================

import React from "react";
import styles from "./Button.module.css";

// ─── Types ──────────────────────────────────────────────────
// نعرّف الـ Variants بوضوح عبر TypeScript Union Types
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "danger"
  | "defult";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** نوع الزر - يحدد اللون والأسلوب العام */
  variant?: ButtonVariant;

  /** حجم الزر - يحدد الـ padding والـ font-size */
  size?: ButtonSize;

  /** حالة التحميل - يُعطّل الزر ويُظهر مؤشر دوران */
  loading?: boolean;

  /** أيقونة قبل النص */
  leftIcon?: React.ReactNode;

  /** أيقونة بعد النص */
  rightIcon?: React.ReactNode;

  /** يجعل الزر يملأ العرض الكامل */
  fullWidth?: boolean;

  children: React.ReactNode;
}

// ─── Component ──────────────────────────────────────────────
export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  children,
  className = "",
  ...rest
}) => {
  // نبني className ديناميكيًا بناءً على الـ props
  const classes = [
    styles.btn,
    styles[`btn--${variant}`], // btn--primary / btn--secondary ...
    styles[`btn--${size}`], // btn--sm / btn--md / btn--lg
    fullWidth ? styles["btn--full"] : "",
    loading ? styles["btn--loading"] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const isDisabled = disabled || loading;

  return (
    <button
      className={classes}
      disabled={isDisabled}
      aria-busy={loading}
      {...rest}
    >
      {/* مؤشر التحميل */}
      {loading && <span className={styles.spinner} aria-hidden="true" />}

      {/* الأيقونة اليسارية */}
      {!loading && leftIcon && <span className={styles.icon}>{leftIcon}</span>}

      {/* النص */}
      <span>{children}</span>

      {/* الأيقونة اليمينية */}
      {!loading && rightIcon && (
        <span className={styles.icon}>{rightIcon}</span>
      )}
    </button>
  );
};

export default Button;
