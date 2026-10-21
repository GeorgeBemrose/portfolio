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

export function CopyEmail({ email }: { email: string }) {
  const [label, setLabel] = useState("Copy email");

  const copy = () =>
    navigator.clipboard.writeText(email).then(
      () => {
        setLabel("Copied");
        setTimeout(() => setLabel("Copy email"), 1800);
      },
      () => setLabel("Copy it from the box")
    );

  return (
    <button className="btn" type="button" onClick={copy}>
      {label}
    </button>
  );
}
