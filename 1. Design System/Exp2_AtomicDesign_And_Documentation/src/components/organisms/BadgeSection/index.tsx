import Badge from "../../atoms/Badge/Badge";

export default function BadgeSection() {
  return (
    <section className="section section--tight">
      <h2 className="section-title">Badge</h2>
      <p className="section-desc">
        وسوم ملوّنة تستخدم Semantic Colors من الـ Tokens مباشرة.
      </p>

      <div className="demo-card">
        <div className="demo-label">Variants</div>
        <div className="demo-row">
          <Badge variant="primary">أساسي</Badge>
          <Badge variant="success">مكتمل</Badge>
          <Badge variant="warning">قيد الانتظار</Badge>
          <Badge variant="error">خطأ</Badge>
          <Badge variant="neutral">مؤرشف</Badge>
        </div>
      </div>

      <div className="demo-card">
        <div className="demo-label">مع Dot</div>
        <div className="demo-row">
          <Badge variant="success" dot>
            متصل
          </Badge>
          <Badge variant="error" dot>
            غير متصل
          </Badge>
          <Badge variant="warning" dot>
            في انتظار الموافقة
          </Badge>
        </div>
      </div>

      <div className="demo-card">
        <div className="demo-label">Sizes</div>
        <div className="demo-row demo-row--center">
          <Badge size="sm">صغير</Badge>
          <Badge size="md">متوسط</Badge>
          <Badge size="lg">كبير</Badge>
        </div>
      </div>
    </section>
  );
}
