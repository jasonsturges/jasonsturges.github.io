import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export default function PortfolioLayout({ children }) {
  return (
    <Theme appearance="dark" accentColor="blue" panelBackground="translucent">
      {children}
    </Theme>
  );
}
