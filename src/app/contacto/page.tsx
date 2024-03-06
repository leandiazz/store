import { Skeleton } from "@/components/ui/skeleton";

export default function contacto() {
  return (
    <div className="mt-4 p-8">
      <Skeleton className="ml-10 h-10 w-[200px]" />
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="flex w-[20rem] flex-row items-center gap-2 rounded border-r-4 bg-white p-2 shadow-lg">
          <Skeleton className="h-[4.5rem] w-[4.5rem]" />
        </div>
      </div>
    </div>
  );
}
// <div className="m-5 mt-0 inline-block w-full max-w-24 p-5 pt-0">
//   <Skeleton className="h-96 w-[380px]" />
// </div>;
