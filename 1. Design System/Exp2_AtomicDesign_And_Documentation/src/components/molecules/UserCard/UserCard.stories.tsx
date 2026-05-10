import type { Meta, StoryObj } from "@storybook/react";
import { UserCard } from "./UserCard";

const meta: Meta<typeof UserCard> = {
  title: "Molecules/UserCard",
  component: UserCard,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: { type: "select" },
      options: ["online", "offline", "busy", "away"],
      description: "حالة المستخدم - تؤثر على لون الـ Badge",
    },
    onAction: { action: "تم النقر على الزر" },
  },
};

export default meta;
type Story = StoryObj<typeof UserCard>;

export const Online: Story = {
  args: {
    name: "أحمد محمد",
    role: "مطوّر واجهات أمامية",
    status: "online",
    actionLabel: "تواصل",
  },
};

export const WithInitials: Story = {
  args: {
    name: "سارة علي",
    role: "مصمّمة UX/UI",
    status: "busy",
  },
};

export const Offline: Story = {
  args: {
    name: "خالد العمري",
    role: "مدير المنتج",
    status: "offline",
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <UserCard
        name="أحمد محمد"
        role="مطوّر"
        status="online"
        actionLabel="تواصل"
      />
      <UserCard
        name="سارة علي"
        role="مصمّمة"
        status="busy"
        actionLabel="تواصل"
      />
      <UserCard
        name="خالد العمري"
        role="مدير المنتج"
        status="away"
        actionLabel="تواصل"
      />
      <UserCard
        name="نورة سالم"
        role="محللة بيانات"
        status="offline"
        actionLabel="تواصل"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "مثال على كيف تعكس بطاقة المستخدم الحالة المختلفة عبر ألوان دلالية متسقة مع الـ Design System.",
      },
    },
  },
};
