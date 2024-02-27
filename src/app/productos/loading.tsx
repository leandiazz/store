import { Skeleton } from "@/components/ui/skeleton";

const number = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
];

function loading() {
  return (
    <div className="p-8">
      <Skeleton className="ml-10 h-[26px] w-[210px] rounded" />

      <ul className="m-0 grid h-screen list-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {number.map((i) => (
          <li
            key={i.id}
            className="m-5 box-border flex shrink-0 grow-0 basis-full"
          >
            <div className="flex h-full w-full flex-col p-5">
              <div className="h-full w-full">
                <Skeleton className="h-full  w-auto rounded" />
              </div>
              <div className=" h-auto w-full ">
                <Skeleton className="m-auto mt-1 h-[22px] w-auto" />
                <Skeleton className="m-auto mt-1 h-[22px] w-auto" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default loading;
