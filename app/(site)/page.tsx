import { getProjects } from "@/sanity/sanity-utils";
import Link from "next/link";
// home page
export default async function Home() {
  const projects = await getProjects(); // getProjects from sanity/sanity-utils.ts

  return (
    <section className="">
      <div className="flex flex-col mx-3">
        {/* grid */}
        <div className="grid md:mb-36 md:grid-cols-6 md:items-start">
          <h1 className="md:col-span-2 text-3xl lg:text-5xl xL:text-7xl uppercase my-3 mx-1 font-sans font-medium flex-wrap ">
            Contemporary Clay
          </h1>
          <h2 className="capitalize md:col-span-1 mx-3 md:mt-10 md:ml-7 lg:ml-20 lg:place-self-start text-lg md:text-xl lg:text-2xl">
            course resources by Carla
          </h2>
          <div className="md:col-span-3 md:mt-14 mx-3 my-6 text-2xl md:text-3xl  xl:text-4xl font-sans font-normal text-left lg:m-12">
            <p className="">
              Explore this site for a dynamic and ever-evolving curriculum.
            </p>
            <p>
              Here I incorporate carefully chosen instructional videos, links
              and skill-matched projects to enhance your your experience.
            </p>
            <p>
              In class, we follow the book &quot;Handbuilt by Lilly Maetzig
              &quot; 🔗 OPTIONAL
              <span className="mx-3">
                <Link
                  href="https://bookshop.org/p/books/hand-built-the-handbuilder-s-handbook-lilly-maetzig/18690864?ean=9781787139176&gclid=Cj0KCQjwsp6pBhCfARIsAD3GZuajAptJZqidCqS4PHJYGRLitiQNULvgX7xW47T_IuYXAUyUi0X56NUaAlbnEALw_wcB"
                  className="underline hover:bg-yellow-200 transition y-3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  You can buy it here.
                </Link>
              </span>
            </p>
            <p>
              Whether you favor wheel throwing or handbuilding, our weekly
              curriculum is tailored to accommodate both pathways.
            </p>
          </div>
          <div className="text-5xl mx-6 md:text-6xl lg:text-7xl xl:text-8xl place-self-end justify-center md:col-span-6 animate-pulse">
            ↓
          </div>
        </div>
        {/* grid end */}
        {/* map section fetching */}
        <div className="leading-relaxed py-3" id="#course">
          <h1 className="text-3xl mb-4 md:mb-5 md:text-4xl md:my-3 lg:text-5xl xl:text-6xl">
            WEEKS
          </h1>
          {projects
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((project) => (
              <div key={project._id} className="border-b-2 border-black">
                <div className="grid md:grid-cols-12 p-2 xl:p-0 xl:m-3 m-2 gap-3 lg:gap-0  text-lg md:text-xl lg:text-2xl xl:text-3xl">
                  <h1 className="uppercase font-semibold  md:col-span-2 ">{project.name}</h1>
                  <p className="text-base md:text-lg lg:text-xl md:col-span-8 md:px-3 md:py-2 ">
                    {project.description}
                  </p>

                  <Link
                    href={`/projects/${project.slug}`}
                    key={project._id}
                    className=" hover:text-amber-400 curs hover:scale-y-50 transition md:w-fit md:col-span-2"
                  >
                    See More 🔗
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
