import Image from "next/image";

export default function LoadingCrab() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <Image
        src="/kani.png"
        alt="カニ"
        width={100}
        height={70}
        className="kani-walk"
      />
    </div>
  );
}