"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ScrollCrab() {
  const [scrollX, setScrollX] = useState(1);
  const [tilt, setTilt] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [imageSrc, setImageSrc] = useState("/sc-kani01.png");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight ? scrollTop / docHeight : 0;
      setScrollX(scrollPercent * (100 - 6)); // 引いてる数値はカニ画像分の幅、はみ出さないよう調整した分

      // カニが歩くときに左右に傾く調整
      const tiltAngle = Math.sin(scrollTop / 2) * 10;
      setTilt(tiltAngle);
    };
    // クリック時のカニ画像を先に読み込み
    const preloadImage = new window.Image();
    preloadImage.src = "/sc-kani02.png";

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // クリックでジャンプ＆画像変更の設定
  const handleClick = () => {
    setHovered(true);
    setImageSrc("/sc-kani02.png");
    setTimeout(() => {
      setHovered(false);
      setImageSrc("/sc-kani01.png");
    }, 250);
  };
  const jumpOffset = hovered ? -30 : 0;

  const style = {
    transform: `translateX(${scrollX}vw) translateY(${jumpOffset}px) rotate(${tilt}deg)`,
    transition: "transform 0.02s ease-in",
    cursor: "pointer",
  };

  return (
    <div
      className="fixed bottom-0 left-0 w-16 h-16 pointer-events-none z-50 hidden md:block"
      style={style}
      onClick={handleClick}
    >
      <Image
        src={imageSrc}
        alt="タシカニ!!"
        fill
        className="object-contain pointer-events-auto"
      />
    </div>
  );
}
