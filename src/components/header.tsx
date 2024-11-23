import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import CitySearch from "./city-search";

const Header = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"} className="flex items-center justify-center gap-5">
          <img src="/logo.png" alt="Atmosfy" className="h-14" />
          <h1
            className="text-2xl font-bold tracking-wide font-mono bg-gradient-to-r from-cyan-300 via-pink-300 to-blue-500 bg-clip-text text-transparent animate-gradientText"
            style={{
              backgroundSize: "300% 300%",
            }}
          >
            Atmosfy
          </h1>
        </Link>

        <div className="flex gap-4">
          {/* search */}
          <CitySearch />
          {/* theme toggle */}
          <div
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`flex items-center cursor-pointer transition-transform duration-500 ${
              isDark ? "rotate-180" : "rotate-0"
            }`}
          >
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow-500 rotate-0 transition-all" />
            ) : (
              <Moon className="h-6 w-6 text-blue-500 rotate-0 transition-all" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
