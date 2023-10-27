import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { RichTextComponents } from "../../(site)/components/global/RichTextComponents";


type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <article className="antialiased container py-5 mx-auto md:max-w-6xl lg:max-w-5xl border-t-8 border-black">
    {/* header */}
    {/* <header className="flex md:max-w-5xl align-middle justify-center items-center sm:mx-5 text-xl sm:text-2xl lg:text-3xl xl:text-4xl md:text-3xl font-sans font-normal text-left lg:m-12 ">
      <h1 className="text-3xl py-5 uppercase lg:text-5xl ">{page.title}</h1>
    </header> */}
    <div className="grid grid-cols-1 py-3 mx-5 md:px-3 xl:px-0 align-middle justify-center items-center">
      <div className=" ">
        {page.image && (
          <Image
            src={page.image}
            alt={page.title}
            width={250}
            height={100}
            className="object-cover rounded-2xl w-full my-5"
          />
        )}
      </div>
      <div className="antialiased mx-3 my-6 text-lg md:text-2xl font-sans font-normal text-left leading-relaxed">
        <PortableText
          value={page.content}
          components={RichTextComponents}
        />
      </div>
      {/* Add a third div here if needed */}
      <div className="row-span-1">
        {/* content for third row */}
      </div>
    </div>
  </article>
  );


}
