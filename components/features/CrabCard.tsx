"use client";
import Image from "next/image";
import { useState } from "react";
import type { CrabData } from "@/types/crab";

type CrabCardProps = {
  crab: CrabData;
};

export const CrabCard = ({ id, description }: CrabCardProps) => {
  const imagePath = `/ogp/kani${id}.png`;
  const pageUrl = `https://tashikani-i.vercel.app/images/${id}`;
  const tweetText = `※ここに投稿文を書いてね🦀`;

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("コピー失敗:", err);
    }
  };

  return (
    <div className="card shadow-lg bg-base-100">
      <figure>
        <Image
          src={imagePath}
          alt="タシカニ市場"
          width={800}
          height={300}
          className="mx-auto"
        />
      </figure>
      <div className="card-body">
        {/* NEWボタンの配置はここ！新規画像のidに合わせて数値を変更させる */}
        {Number(id) >= 13 && <div className="badge badge-secondary">NEW</div>}
        <p className="text-sm md:text-base mb-2 text-left text-gray-800">
          {description}
        </p>
        <div className="card-actions justify-end flex-row items-center gap-2">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              tweetText
            )}%0A${encodeURIComponent(pageUrl)}`}
            className="btn btn-primary md:btn-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Xに投稿
          </a>
          <button className="btn btn-accent md:btn-sm" onClick={handleCopy}>
            {copied ? "コピー完了！" : "URLをコピー"}
          </button>
        </div>
      </div>
    </div>
  );
};
