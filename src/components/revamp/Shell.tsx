import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Reveal from "./Reveal";
export default function Shell({
  children,
  grid = true,
}: {
  children: ReactNode;
  grid?: boolean;
}) {
  return (
    <div className="ws-site ha-site">
      <Header />
      <Reveal />
      <main id="main-content" className={grid ? "ha-page-grid" : undefined}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
