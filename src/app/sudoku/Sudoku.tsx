'use client'

import { useEffect, useState, type CSSProperties, type KeyboardEvent } from "react";

// Row-major, 0 = empty. Has exactly one solution.
const PUZZLE = "004207830050460100973000400000026013080571000006040250890002007400018560605004001".split("").map(Number);
const GIVEN = PUZZLE.map((v) => v !== 0);

const row = (i: number) => Math.floor(i / 9);
const col = (i: number) => i % 9;
const box = (i: number) => Math.floor(row(i) / 3) * 3 + Math.floor(col(i) / 3);
const isPeer = (a: number, b: number) => a !== b && (row(a) === row(b) || col(a) === col(b) || box(a) === box(b));

// Cells whose value repeats in their row, column or box.
const clashes = (cells: number[]) =>
  new Set(cells.flatMap((v, i) => (v && cells.some((w, j) => w === v && isPeer(i, j)) ? [i] : [])));

const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
const MOVES: Record<string, number> = { ArrowUp: -9, ArrowDown: 9, ArrowLeft: -1, ArrowRight: 1 };

export default function Sudoku() {
  const [cells, setCells] = useState(PUZZLE);
  const [sel, setSel] = useState(PUZZLE.indexOf(0));
  const [paused, setPaused] = useState(false);
  const [secs, setSecs] = useState(0);
  const [showSame, setShowSame] = useState(true);

  const bad = clashes(cells);
  const solved = cells.every(Boolean) && bad.size === 0;
  const running = !paused && !solved;

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setSecs((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [running]);

  const place = (v: number) => {
    if (running && !GIVEN[sel]) setCells((c) => c.map((x, i) => (i === sel ? v : x)));
  };

  const restart = () => {
    setCells(PUZZLE);
    setSecs(0);
    setPaused(false);
    setSel(PUZZLE.indexOf(0));
  };

  const onKey = (e: KeyboardEvent) => {
    const d = MOVES[e.key];
    if (d) {
      e.preventDefault();
      const n = sel + d;
      if (n >= 0 && n < 81 && (Math.abs(d) === 9 || row(n) === row(sel))) setSel(n);
    } else if (/^[1-9]$/.test(e.key)) place(Number(e.key));
    else if (["Backspace", "Delete", "0"].includes(e.key)) place(0);
  };

  const left = (v: number) => 9 - cells.filter((x) => x === v).length;

  return (
    <>
      <header className="wrap top">
        <a className="mark" href="/" aria-label="George Bemrose, home">GB</a>
        <nav aria-label="Site"><a href="/">Back to portfolio</a></nav>
      </header>

      <main className="wrap sk">
        <div className="sk-head">
          <h1>Sudoku</h1>
          <div className="sk-clock">
            <span className="time" aria-label={`Time ${fmt(secs)}`}>{fmt(secs)}</span>
            <button className="ghost" type="button" onClick={() => setPaused((p) => !p)} disabled={solved}>
              {paused ? "Resume" : "Pause"}
            </button>
          </div>
        </div>

        <div
          className={`board${paused ? " is-paused" : ""}${solved ? " is-solved" : ""}`}
          role="grid"
          aria-label="Sudoku board"
          tabIndex={0}
          aria-activedescendant={`c${sel}`}
          onKeyDown={onKey}
        >
          {Array.from({ length: 9 }, (_, r) => (
            <div role="row" className="row" key={r}>
              {Array.from({ length: 9 }, (_, c) => {
                const i = r * 9 + c;
                const v = cells[i];
                const cls = [
                  "cell",
                  GIVEN[i] && "given",
                  i === sel && "sel",
                  isPeer(i, sel) && "peer",
                  showSame && v && v === cells[sel] && i !== sel && "same",
                  bad.has(i) && "bad",
                  (c === 2 || c === 5) && "br",
                  (r === 2 || r === 5) && "bb",
                ].filter(Boolean).join(" ");
                return (
                  <div
                    key={i}
                    id={`c${i}`}
                    role="gridcell"
                    aria-selected={i === sel}
                    aria-label={`Row ${r + 1}, column ${c + 1}, ${v || "empty"}${GIVEN[i] ? ", given" : ""}`}
                    className={cls}
                    style={{ "--d": r + c } as CSSProperties}
                    onClick={() => setSel(i)}
                  >
                    {paused ? "" : v || ""}
                  </div>
                );
              })}
            </div>
          ))}
          {paused && (
            <div className="overlay">
              <button className="btn" type="button" onClick={() => setPaused(false)}>Resume</button>
            </div>
          )}
        </div>

        <div className="pad">
          {Array.from({ length: 9 }, (_, k) => k + 1).map((v) => (
            <button key={v} type="button" onClick={() => place(v)} disabled={!running || left(v) <= 0} aria-label={`Enter ${v}`}>
              {v}
            </button>
          ))}
          <button type="button" className="erase" onClick={() => place(0)} disabled={!running}>Erase</button>
        </div>

        <p className={`status${solved ? " won" : ""}`} aria-live="polite">
          {solved ? `Solved in ${fmt(secs)}. Nice work.` : "Pick a square, then a number. Arrow keys and 1 to 9 work too."}
        </p>
        <div className="actions">
          <label className="switch">
            <input type="checkbox" checked={showSame} onChange={(e) => setShowSame(e.target.checked)} />
            <span className="track" aria-hidden="true"></span>
            Highlight matching numbers
          </label>
          <button className="ghost" type="button" onClick={restart}>{solved ? "Play again" : "Restart"}</button>
        </div>
      </main>
    </>
  );
}
