import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "dark" ? "light" : "dark"
    );
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-gray-200
        bg-white
        text-gray-700
        shadow-sm
        transition-all
        duration-300
        hover:scale-105
        hover:bg-gray-100
        dark:border-gray-700
        dark:bg-gray-800
        dark:text-yellow-400
        dark:hover:bg-gray-700
      "
    >
      {theme === "dark" ? (
        <Sun
          size={20}
          className="transition-transform duration-300 rotate-0"
        />
      ) : (
        <Moon
          size={20}
          className="transition-transform duration-300 rotate-0"
        />
      )}
    </button>
  );
};

export default ThemeToggle;