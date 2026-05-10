export default function TokensSection() {
  return (
    <section id="tokens" className="section">
      <div className="section-label">01 — Design Tokens</div>
      <h2 className="section-title">الألوان</h2>
      <p className="section-desc">
        كل لون معرَّف كـ Token في <code>src/tokens/colors.ts</code> ثم محوَّل
        إلى CSS Variable في <code>tokens.css</code>.
      </p>

      <div className="token-section">
        <div className="token-group-title">Primary Scale</div>
        <div className="swatches">
          {[
            ["50", "#EFF6FF"],
            ["100", "#DBEAFE"],
            ["200", "#BFDBFE"],
            ["300", "#93C5FD"],
            ["400", "#60A5FA"],
            ["500", "#3B82F6"],
            ["600", "#2563EB"],
            ["700", "#1D4ED8"],
            ["800", "#1E40AF"],
            ["900", "#1E3A8A"],
          ].map(([name, hex]) => (
            <div key={name} className="swatch">
              <div className="swatch-color" style={{ background: hex }} />
              <div className="swatch-label">{name}</div>
              <div className="swatch-hex">{hex}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="token-section">
        <div className="token-group-title">Semantic Colors</div>
        <div className="swatches swatches--semantic">
          {[
            ["success", "#10B981", "نجاح"],
            ["error", "#EF4444", "خطأ"],
            ["warning", "#F59E0B", "تحذير"],
            ["info", "#0EA5E9", "معلومة"],
          ].map(([name, hex, label]) => (
            <div key={name} className="swatch swatch--semantic">
              <div className="swatch-color" style={{ background: hex }} />
              <div className="swatch-label">{label}</div>
              <div className="swatch-hex">{hex}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
