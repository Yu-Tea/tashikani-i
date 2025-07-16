"use client";
import Image from "next/image";
import { useState } from "react";

type CrabCardProps = {
  id: string;
  description: string;
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
    <div className="card shadow-xl bg-base-100">
      <figure>
        <Image
          src={imagePath}
          alt="タシカニ市場"
          width={500}
          height={300}
          className="mx-auto"
        />
      </figure>
      <div className="card-body">
        <p className="text-sm mb-2">{description}</p>
        <div className="card-actions justify-end flex-row items-center gap-2">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              tweetText
            )}%0A${encodeURIComponent(pageUrl)}`}
            className="btn btn-primary"
          >
            Xに投稿
          </a>
          <button className="btn btn-accent" onClick={handleCopy}>
            {copied ? "コピー完了！" : "URLをコピー"}
          </button>
        </div>
      </div>
    </div>
  );
};
