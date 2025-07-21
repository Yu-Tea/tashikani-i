"use client";

import { useState } from "react";

import { crabData } from "../data/info";
import { CrabCard } from "./CrabCard";

// FilterTypeを定義
type FilterType = "all" | "tashikani" | "notTashikani";

// カニカードを降順で並び替え
const sortedKani = [...crabData].sort(
  (a, b) => parseInt(b.id) - parseInt(a.id)
);

export default function CrabList() {
  const [filter, setFilter] = useState<FilterType>("all");

  const handleFilterClick = (type: FilterType) => {
    setFilter((prev) => (prev === type ? "all" : type));
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
        <div className="flex flex-row justify-center items-center gap-1.5">
          <p className="text-sm font-bold text-gray-600">画像絞り込み▶</p>
          <button
            onClick={() => handleFilterClick("tashikani")}
            className={`btn btn-primary ${
              filter === "tashikani" ? "" : "btn-soft"
            }`}
          >
            タシカニ
          </button>
          <button
            onClick={() => handleFilterClick("notTashikani")}
            className={`btn btn-accent ${
              filter === "notTashikani" ? "" : "btn-soft"
            }`}
          >
            Notタシカニ
          </button>
        </div>
      </div>
      {/* カニカード */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-8 mt-8">
        {filteredKani.map((kani) => (
          <CrabCard
            key={kani.id}
            id={kani.id}
            description={kani.description}
          />
        ))}
      </div>
    </div>
  );
}
