import { crabData } from "../../data/info";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const crab = crabData.find((item) => item.id === params.id);

  if (!crab) return {};

  return {
    description: crab.description,
    openGraph: {
      title: crab.title,
      description: crab.description,
      images: [`https://your-domain.com${crab.image}`],
    },
    twitter: {
      card: "summary_large_image",
      description: crab.description,
      images: [`https://your-domain.com${crab.image}`],
    },
  };
}
