import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const targets = [
    {
      id: 1,
      title: "tops",
      src: "/tops.jpeg"
    },
    {
      id: 2,
      title: "faldas",
      src: "/tops.jpeg"
    },
    {
      id: 3,
      title: "pantalones",
      src: "/tops.jpeg"
    },
    {
      id: 4,
      title: "remerones",
      src: "/remerones.jpeg"
    },
    {
      id: 5,
      title: "vestidos",
      src: "/vestidos.jpeg"
    }
  ];

  return (
    <>
      <Image src="/1.jpeg" width={1920} height={1080} alt="1" />
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 mt-10 p-10">
        {targets.map(target => {
          return (
            <article key={target.id}>
              <Link href={``}>
                <img
                  alt={target.title}
                  className="mb-3 h-[300px] w-full object-cover"
                  src={target.src}
                />
                <h2 className="text-3xl text-center font-bold">
                  <p>{target.title}</p>
                </h2>
              </Link>
            </article>
          );
        })}
      </section>
    </>
  );
}
