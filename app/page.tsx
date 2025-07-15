"use client";

import { crabData } from "./data/info";
import Image from "next/image";
import { useState } from "react";

// カニ情報を降順で並び替え
const sortedKani = [...crabData].sort(
  (a, b) => parseInt(b.id) - parseInt(a.id)
);

const NEW_COUNT = 2;

export default function Home() {
  return (
    <div className="container mx-auto px-5 py-20">
      <div className="text-center mb-20">
        <Image
          src="/kani.png"
          alt="タシカニ"
          width={100}
          height={100}
          className="mx-auto"
        />
        <Image
          src="/logo.png"
          alt="タシカニ市場"
          width={400}
          height={70}
          className="mx-auto mb-6"
        />

        <p>サンプルテキストサンプルテキスト</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {sortedKani.map((kani, index) => (
          <div className="card shadow-xl bg-base-100" key={kani.id}>
            {index < 2 && (
              <span className="absolute top-2 left-2 badge badge-secondary text-xs">
                NEW
              </span>
            )}
            <figure>
              <Image
                src={kani.image}
                alt="カニ"
                width={600}
                height={300}
                className="mx-auto"
              />
            </figure>
            <div className="card-body">
              <p>{kani.description}</p>
              <div className="card-actions justify-end">
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    kani.url
                  )}&text=${encodeURIComponent(kani.description)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Xに投稿
                </a>
                <button
                  className="btn btn-accent"
                  onClick={() => handleCopy(kani.url)}
                >
                  URLをコピー
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
