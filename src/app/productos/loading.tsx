const CardSkeleton = () => (
  <li className="m-5 mt-0 box-border flex shrink-0 grow-0 basis-full p-5 pt-0">
    <div className="flex flex-col">
      <img
        src="/skeleton-img.webp"
        width="1440"
        height="1800"
        alt="skeleton"
        className="m-auto h-auto w-full animate-pulse"
      />
      <div className="mb-2 mt-2 flex h-20 flex-col items-center text-center">
        <div className="h-6 w-36 animate-pulse rounded-md bg-primary/10" />
        <div className="mt-1 h-6 w-20 animate-pulse rounded-md bg-primary/10" />
      </div>
    </div>
  </li>
);
export default function loading() {
  return (
    <div className="mt-4 p-8">
      <div className="ml-10 h-10 w-[280px] animate-pulse rounded-md bg-primary/10" />
      <div className="m-0 mt-5 grid list-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}
