export default function Callout() {
  return (
    <section className="section section--callout">
      <div className="callout">
        <div className="callout-icon">🔗</div>
        <div>
          <div className="callout-title">كيف تترابط الطبقات</div>
          <div className="callout-desc">
            <code>tokens.css</code> تعرّف المتغيرات ←
            <code>Button.module.css</code> تستهلكها ←<code>Button.tsx</code>{" "}
            يُطبّق الـ class ←<code>UserCard.tsx</code> يستخدم Button ←
            <code>App.tsx</code> يجمع كل شيء
          </div>
        </div>
      </div>
    </section>
  );
}
