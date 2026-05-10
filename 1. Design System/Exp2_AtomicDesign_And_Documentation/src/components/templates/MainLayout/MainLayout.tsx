import { ReactNode } from "react";
import { Header } from "../../organisms/Header/Header";
import Callout from "../../molecules/Callout";
import { Footer } from "../../organisms/Footer/Footer";

interface Props {
  children: ReactNode;
}
export const MainLayout = ({ children }: Props) => {
  return (
    <div className="app">
      <Header />
      <main className="app-main">
        {children}
        <Callout />
      </main>
      <Footer />
    </div>
  );
};
