"use client";

import { useState } from "react";

import { crabData } from "../data/info";
import { CrabCard } from "./CrabCard";

// カニカードを降順で並び替え
const sortedKani = [...crabData].sort(
  (a, b) => parseInt(b.id) - parseInt(a.id)
);

export default function CrabList() {
  const [filter, setFilter] = useState<"all" | "tashikani" | "notTashikani">(
    "all"
  );

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "tashikani" || value === "notTashikani" || value === "all") {
      setFilter(value);
    }
  };

  const filteredKani = sortedKani.filter((kani) => {
    if (filter === "tashikani") return kani.isTashikani;
    if (filter === "notTashikani") return !kani.isTashikani;
    return true;
  });

  return (
    <div>
      {/* カニカードの絞り込みボタン */}
      <div className="text-center mx-auto">
        <form className="filter flex flex-row justify-center items-center gap-1.5">
          <p className="text-sm font-bold text-gray-600">画像絞り込み▶</p>
          {/* 全表示 */}
          <input
            type="reset"
            className="btn btn-square btn-soft"
            value="×"
          />

          {/* タシカニだけ */}
          <input
            type="radio"
            name="frameworks"
            className="btn btn-soft btn-primary"
            aria-label="タシカニ"
          />

          {/* Notタシカニ */}
          <input
            type="radio"
            name="frameworks"
            className="btn btn-soft btn-accent"
            aria-label="Notタシカニ"
          />
        </form>
      </div>
      {/* カニカード */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-6">
        {filteredKani.map((kani) => (
          <CrabCard
            key={kani.id}
            id={kani.id}
            image={kani.image}
            description={kani.description}
          />
        ))}
      </div>
    </div>
  );
}
