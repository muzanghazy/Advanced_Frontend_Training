import Button from "../../atoms/Button/Button";

export default function HeroSection() {
  return (
    <section className="hero">
      <p className="hero-eyebrow">Design System</p>
      <h1 className="hero-title">معرض المكوّنات</h1>
      <p className="hero-desc">
        كل مكوّن مبني على Design Tokens ومعزول بـ CSS Modules. جرّبه هنا، وثّقه
        في Storybook.
      </p>
      <div className="hero-actions">
        <Button
          size="lg"
          leftIcon={<span>📖</span>}
          onClick={() => window.open("http://localhost:6006", "_blank")}
        >
          افتح Storybook
        </Button>
        <Button size="lg" variant="ghost">
          تعرّف على الـ Tokens
        </Button>
      </div>
    </section>
  );
}
