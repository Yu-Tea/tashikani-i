import CrabList from "./components/CrabList";
import ScrollCrab from "./components/ScrollCrab";
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
    <div>
      <div className="mb-15">
        <p>
          へいらっしゃい！
          <br className="block sm:hidden" />
          活きのいいカニ揃えてるよ〜！
        </p>
        <p>称賛・共感・ボケ・ツッコミ…様々な場面でカニが貴方に寄り添います。</p>
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
            <h3 className="font-bold text-lg">🦀 タシカニ市場とは</h3>
            <p className="py-2">
              当市場では、
              <strong>スタンプのように使用</strong>できる様々なカニの画像をご用意しています。
              <strong>Xへの投稿</strong>や、
              <strong>OGP画像が表示される場（Discordのチャット欄など）</strong>
              で該当するURLを貼り付けることで画像を表示できます。
            </p>
            <h4 className="font-semibold mt-4">📮「Xに投稿」ボタンについて</h4>
            <p className="py-2">
              Xに投稿する画面が開きます。
              「※ここに投稿文を書いてね🦀」というダミー文を削除して、Xに投稿したいメッセージに書き換えてください。
            </p>
            <h4 className="font-semibold mt-4">
              📌「URLをコピー」ボタンについて
            </h4>
            <p className="py-2">
              該当する画像を表示するためのURLがコピーできます。
              Xの返信メッセージやDiscordのチャット欄などにコピーしたURLを貼ると、画像が表示されます。
            </p>
            <div className="modal-action">
              <label htmlFor="howto-modal" className="btn btn-outline btn-info">
                閉じる
              </label>
            </div>
          </div>
        </div>
      </div>
      <ScrollCrab />
      <CrabList />
    </div>
  );
}
