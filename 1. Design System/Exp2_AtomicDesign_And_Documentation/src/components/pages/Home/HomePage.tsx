import BadgeSection from "../../organisms/BadgeSection";
import ButtonsSection from "../../organisms/ButtonsSection";
import HeroSection from "../../organisms/HeroSection/HeroSection";
import TokensSection from "../../organisms/TokensSection";
import UserCardsSection from "../../organisms/UserCardsSection";
import { MainLayout } from "../../templates/MainLayout/MainLayout";

export const HomePage = () => {
  return (
    <MainLayout>
      <HeroSection />
      {/* ── Tokens ─────────────────────────────────────────── */}
      <TokensSection />
      {/* ── Atoms: Button ─────────────────────────────────── */}
      <ButtonsSection />
      {/* ── Atoms: Badge ──────────────────────────────────── */}
      <BadgeSection />
      {/* ── Molecules: UserCard ───────────────────────────── */}
      <UserCardsSection />
    </MainLayout>
  );
};
