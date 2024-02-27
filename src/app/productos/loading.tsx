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
      <Skeleton className="ml-10 h-[28px] w-[212px] rounded-none border-2 px-2" />
      <ul className="m-0 grid list-none grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {number.map((item) => (
          <li
            key={item.id}
            className="m-5 box-border flex shrink-0 grow-0 basis-full p-5 "
          >
            <div className="flex flex-col">
              <div className="m-auto h-auto w-full">
                <Skeleton className="h-[475px] w-[380px]" />
              </div>
              <div className="mt-2 flex flex-col items-center">
                <Skeleton className="my-[2px] h-[24px] w-[100px]" />
                <Skeleton className="my-[3px] h-[22px] w-[40px]" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default loading;
