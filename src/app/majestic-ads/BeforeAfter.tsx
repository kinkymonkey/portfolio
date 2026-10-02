"use client";

import { useState } from "react";

type Props = { before: React.ReactNode; after: React.ReactNode };

export function BeforeAfter({ before, after }: Props) {
  const [pos, setPos] = useState(50);
  return (
    <div className="ma-compare">
      <div className="ma-compare__layer">{before}</div>
      <div className="ma-compare__layer" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        {after}
      </div>
      <span className="ma-compare__tag ma-compare__tag--l">Their ad today</span>
      <span className="ma-compare__tag ma-compare__tag--r">Fresh version</span>
      <input
        className="ma-compare__input"
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Drag to compare their current ad with the fresh version"
      />
      <div className="ma-compare__handle" style={{ left: `${pos}%` }} aria-hidden="true">
        <span />
      </div>
    </div>
  );
}
