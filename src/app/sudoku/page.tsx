import type { Metadata } from "next";
import Sudoku from "./Sudoku";
import "../home.css";
import "./sudoku.css";

export const metadata: Metadata = {
  title: "Sudoku | George Bemrose",
  description: "A playable Sudoku with a timer, keyboard controls and clash highlighting.",
};

export default function Page() {
  return <Sudoku />;
}
