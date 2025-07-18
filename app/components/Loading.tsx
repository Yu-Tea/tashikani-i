export default function LoadingCircle() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-base-100 z-50">
      <span className="loading loading-spinner loading-xl text-neutral"></span>
    </div>
  );
}
