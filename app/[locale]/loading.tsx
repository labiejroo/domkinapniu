export default function Loading() {
  return (
    <div className="min-h-screen bg-brand-sunlight animate-pulse">
      <div className="h-10 bg-green-900" />
      <div className="h-16 bg-green-900" />
      <div className="h-[760px] bg-green-800" />
      <div className="max-w-layout mx-auto px-16 py-32 space-y-8">
        <div className="h-6 w-48 rounded bg-green-100" />
        <div className="h-20 w-2/3 rounded bg-green-100" />
        <div className="h-5 w-full rounded bg-green-100" />
        <div className="h-5 w-5/6 rounded bg-green-100" />
      </div>
    </div>
  );
}
