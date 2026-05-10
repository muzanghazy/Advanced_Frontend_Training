// UserCard = Avatar (atom) + Text (atom) + Badge (atom) + Button (atom)
// ============================================================

import React from "react";
import { Button } from "../../atoms/Button/Button";
import { Badge, BadgeVariant } from "../../atoms/Badge/Badge";
import styles from "./UserCard.module.css";

// ─── Types ──────────────────────────────────────────────────
export type UserStatus = "online" | "offline" | "busy" | "away";

export interface UserCardProps {
  name: string;

  role: string;

  avatarUrl?: string;

  status?: UserStatus;

  actionLabel?: string;

  onAction?: () => void;
}

// ─── Status Config ──────────────────────────────────────────
const statusConfig: Record<
  UserStatus,
  { variant: BadgeVariant; label: string }
> = {
  online: { variant: "success", label: "متصل" },
  offline: { variant: "neutral", label: "غير متصل" },
  busy: { variant: "error", label: "مشغول" },
  away: { variant: "warning", label: "بعيد" },
};

// ─── Component ──────────────────────────────────────────────
export const UserCard: React.FC<UserCardProps> = ({
  name,
  role,
  avatarUrl,
  status = "offline",
  actionLabel = "تواصل",
  onAction,
}) => {
  const { variant, label } = statusConfig[status];

  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <article className={styles.card}>
      {/* Avatar */}
      <div className={styles.avatar}>
        {avatarUrl ? (
          <img src={avatarUrl} alt={`صورة ${name}`} />
        ) : (
          <span className={styles.initials}>{initials}</span>
        )}
      </div>

      {/* Info */}
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        <Badge variant={variant} dot size="sm">
          {label}
        </Badge>
      </div>

      {/* Action */}
      {onAction && (
        <div className={styles.action}>
          <Button variant="secondary" size="sm" onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      )}
    </article>
  );
};

export default UserCard;
