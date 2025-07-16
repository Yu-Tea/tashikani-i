import CrabList from "./components/CrabList";
import Image from "next/image";
import type { Metadata } from "next";

// TOPページのMetaタグ情報
export const metadata: Metadata = {
  title: "タシカニ市場",
  description: "へいらっしゃい！活きのいいカニ揃えてるよ〜！",
  openGraph: {
    title: "タシカニ市場",
    description: "いろんなカニをXに投稿しよう！",
    url: "https://tashikani-i.vercel.app",
    images: [
      {
        url: "https://tashikani-i.vercel.app/ogp/top.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "タシカニ市場",
    description: "いろんなカニをXに投稿しよう！",
    images: ["https://tashikani-i.vercel.app/ogp/top.png"],
  },
};

// TOPページのデザイン部分
export default function Home() {
  return (
    <div className="container mx-auto px-8 py-15">
      <div className="text-center mb-15">
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
        <p>へいらっしゃい！活きのいいカニ揃えてるよ〜！</p>
        <p>称賛・共感・ボケ・ツッコミなどにカニで彩りを添えよう！</p>
        <p>
          具体的な使い方はこちらの
          <label
            htmlFor="howto-modal"
            className="link link-primary cursor-pointer"
          >
            ご利用方法
          </label>
          をご覧くださいな。
        </p>

        {/* モーダル */}
        <input type="checkbox" id="howto-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box max-w-2xl text-left">
            <h3 className="font-bold text-lg">🦀 サイトの使い方</h3>
            <p className="py-2">
              このサイトでは、カニの画像を
              <strong>スタンプのように使って楽しめる</strong>ようにしています。
              画像は<strong>X（旧Twitter）への投稿</strong>や、
              <strong>DiscordなどOGP画像が表示されるチャット欄</strong>
              で使うことができます。
            </p>
            <h4 className="font-semibold mt-4">📤 「Xに投稿」ボタンについて</h4>
            <p className="py-2">
              ボタンを押すとXに投稿する画面が開きます。投稿文にある
              「※ここに投稿文を書いてね🦀」のダミーを削除して、自分のメッセージを書いてください。
            </p>
            <h4 className="font-semibold mt-4">
              📋 「URLをコピー」ボタンについて
            </h4>
            <p className="py-2">
              ボタンを押すと、画像ページのURLがコピーされます。
              Xの返信やDiscordなどで貼りたいときに使ってください。貼るとOGP画像として表示されます。
            </p>
            <div className="modal-action">
              <label htmlFor="howto-modal" className="btn btn-outline btn-info">
                閉じる
              </label>
            </div>
          </div>
        </div>
      </div>

      <CrabList />
    </div>
  );
}
