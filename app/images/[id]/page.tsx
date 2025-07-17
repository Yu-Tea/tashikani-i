import { crabData } from "../../data/info";
import Image from "next/image";
import Link from 'next/link';

// カニ番号で静的ページ生成用のパラメータを作成
export async function generateStaticParams() {
  return crabData.map((kani) => ({ id: kani.id }));
}

// OGP画像の設定
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const crab = crabData.find((kani) => kani.id === params.id);
  if (!crab) return {};

  const baseUrl = "https://tashikani-i.vercel.app";
  const imageUrl = `${baseUrl}/ogp/kani${crab.id}.png`;
  const pageUrl = `${baseUrl}/images/${crab.id}`;

  return {
    title: `タシカニ市場`,
    openGraph: {
      title: `タシカニ市場`,
      url: pageUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "タシカニ画像",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `タシカニ市場`,
      images: [imageUrl],
    },
  };
}

// ページのデザイン
export default async function CrabPage({ params }: { params: { id: string } }) {
  const crab = crabData.find((kani) => kani.id === params.id);
  if (!crab) return notFound();

  const imagePath = `/ogp/kani${crab.id}.png`;
  return (
    <div>
      <Image
        src={imagePath}
        alt="タシカニ市場"
        width={800}
        height={400}
        className="rounded mx-auto my-10"
      />
      <p className="mt-4 text-gray-600 text-left sm:text-center">{crab.description}</p>
      <Link href="/" className="btn btn-outline btn-neutral mt-10">
        タシカニ市場へGO！
      </Link>
    </div>
  );
}
