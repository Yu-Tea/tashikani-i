import { crabData } from "../../data/info";
import Image from "next/image";

export async function generateStaticParams() {
  return crabData.map((kani) => ({ id: kani.id }));
}

export default async function CrabPage({ params }: { params: { id: string } }) {
  const crab = crabData.find((kani) => kani.id === params.id);
  if (!crab) return notFound();

  return (
    <div className="container mx-auto px-5 py-20 text-center">
      <Image
        src={crab.image}
        alt="タシカニ市場"
        width={800}
        height={400}
        className="rounded shadow mx-auto mb-20"
      />
      <p className="mt-4 text-gray-600">{crab.description}</p>
    </div>
  );
}
