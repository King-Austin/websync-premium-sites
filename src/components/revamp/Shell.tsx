import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Reveal from "./Reveal";
export default function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="ws-site ha-site">
      <Header />
      <Reveal />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
