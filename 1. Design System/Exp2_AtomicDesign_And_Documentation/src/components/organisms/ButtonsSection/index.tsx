import { useState } from "react";
import Button from "../../atoms/Button/Button";

export default function ButtonsSection() {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setLoadingId(id);
    setTimeout(() => setLoadingId(null), 2000);
  };
  return (
    <section id="atoms" className="section">
      <div className="section-label">02 — Atoms</div>
      <h2 className="section-title">Button</h2>
      <p className="section-desc">
        أصغر وحدة قابلة للاستخدام. يدعم 4 variants، 3 أحجام، loading state،
        وأيقونات.
      </p>

      <div className="demo-card">
        <div className="demo-label">Variants</div>
        <div className="demo-row">
          <Button
            variant="primary"
            onClick={() => handleClick("p")}
            loading={loadingId === "p"}
          >
            Primary
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleClick("s")}
            loading={loadingId === "s"}
          >
            Secondary
          </Button>
          <Button
            variant="ghost"
            onClick={() => handleClick("g")}
            loading={loadingId === "g"}
          >
            Ghost
          </Button>
          <Button
            variant="danger"
            onClick={() => handleClick("d")}
            loading={loadingId === "d"}
          >
            Danger
          </Button>
        </div>
        <p className="demo-hint">انقر أي زر لتجربة حالة التحميل</p>
      </div>

      <div className="demo-card">
        <div className="demo-label">Sizes</div>
        <div className="demo-row demo-row--center">
          <Button size="sm">صغير sm</Button>
          <Button size="md">متوسط md</Button>
          <Button size="lg">كبير lg</Button>
        </div>
      </div>

      <div className="demo-card">
        <div className="demo-label">States</div>
        <div className="demo-row">
          <Button loading>جاري التحميل</Button>
          <Button disabled>معطّل</Button>
          <Button leftIcon={<span>✨</span>}>مع أيقونة</Button>
          <Button variant="danger" leftIcon={<span>🗑️</span>}>
            حذف
          </Button>
        </div>
      </div>

      <div className="demo-card">
        <div className="demo-label">Full Width</div>
        <Button fullWidth size="lg">
          زر بعرض كامل
        </Button>
      </div>
    </section>
  );
}
