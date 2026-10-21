'use client'

import { useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    document.documentElement.dataset.theme = dark ? "light" : "dark";
    setDark(!dark);
  };

  return (
    <button className="theme" type="button" aria-pressed={dark} onClick={toggle}>
      <span className="knob" aria-hidden="true"></span>Dark mode
    </button>
  );
}
