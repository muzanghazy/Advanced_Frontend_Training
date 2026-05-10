import UserCard from "../../molecules/UserCard/UserCard";

export default function UserCardsSection() {
  return (
    <section id="molecules" className="section">
      <div className="section-label">03 — Molecules</div>
      <h2 className="section-title">UserCard</h2>
      <p className="section-desc">
        Molecule تجمع: Avatar + Name + Role + Badge + Button. كل عنصر منها هو
        Atom مستقل.
      </p>

      <div className="cards-grid">
        <UserCard
          name="أحمد محمد"
          role="مطوّر واجهات أمامية"
          status="online"
          actionLabel="تواصل"
          onAction={() => alert("تواصل مع أحمد")}
        />
        <UserCard
          name="سارة العمري"
          role="مصمّمة UX/UI"
          status="busy"
          actionLabel="تواصل"
          onAction={() => alert("سارة مشغولة الآن")}
        />
        <UserCard
          name="خالد الزهراني"
          role="مدير المنتج"
          status="away"
          actionLabel="تواصل"
          onAction={() => alert("خالد بعيد")}
        />
        <UserCard
          name="نورة سالم"
          role="محللة بيانات"
          status="offline"
          actionLabel="تواصل"
        />
      </div>
    </section>
  );
}
