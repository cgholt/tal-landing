import { getSiteConfig } from "lib/content";
import HeaderNav from "components/HeaderNav";

export default function Header() {
  const siteConfig = getSiteConfig();

  return (
    <header className="sticky top-0 z-50 bg-primary">
      <nav className="relative z-10 mx-auto max-w-7xl px-6 py-4">
        <HeaderNav siteConfig={siteConfig} />
      </nav>
    </header>
  );
}
