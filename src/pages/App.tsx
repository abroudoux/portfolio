import { useEffect, useState } from "react";

import DesktopPortfolio from "@/PortfolioSize/DesktopPortfolio";
import MobilePortfolio from "@/PortfolioSize/MobilePortfolio";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const cursor: HTMLSpanElement | null = document.querySelector(".cursor");

    function handleCursor(e: MouseEvent) {
      if (cursor) {
        cursor.style.left = `${e.x}px`;
        cursor.style.top = `${e.y}px`;
      }
    }

    window.addEventListener("mousemove", (e) => handleCursor(e));

    return () => {
      window.removeEventListener("mousemove", (e) => handleCursor(e));
    };
  }, []);

  return <>{isMobile ? <MobilePortfolio /> : <DesktopPortfolio />}</>;
}
