import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { RichTextComponents } from "../../components/global/RichTextComponents";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug); // utils file
  return (
    <article className="antialiased container py-5 mx-auto lg:max-w-5xl border-t-8 border-yellow-400">
      {/* header */}
      <header className="flex md:max-w-5xl align-middle justify-center items-center sm:mx-5 text-xl sm:text-2xl lg:text-3xl xl:text-4xl ">
        <h1 className="text-3xl py-5 uppercase ">{project.name}</h1>
      </header>
      <div className="grid grid-cols-1 py-3 mx-5 md:px-3 xl:px-0 align-middle justify-center items-center text-justify">
        <div className=" ">
          {project.image && (
            <Image
              src={project.image}
              alt={project.name}
              width={250}
              height={100}
              className="object-cover rounded-2xl w-full xxl:w-1/2"
            />
          )}
        </div>
        <div className="antialiased mx-3 my-6 text-2xl md:text-3xl  xl:text-4xl font-sans font-normal text-left">
          <PortableText
            value={project.content}
            components={RichTextComponents}

          />
        </div>

        {/* Add a third div here if needed */}
        <div className="row-span-1">{/* content for third row */}</div>
      </div>
    </article>
  );
}
