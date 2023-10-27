import { getFooterData } from "@/sanity/sanity-utils";
import type { Footer } from "@/types/Footer";

type Props = {
  params: { footer: string };
};

export default async function Footer({ params }: Props) {
  const footerData = await getFooterData(); // utils file

  return (
    <footer className="p-5 my-3 grid md:grid-cols-2 max-w-7xl mx-auto items-center md:justify-between md:justify-items-center	 lg:mt-[5%] ">
      <div className="w-fit my-3">
        <p className="font-semibold text-gray-400">Email</p>
        {footerData &&
          footerData.map((data) => (
            <>
              <p className="underline hover:bg-yellow-200 transition y-3 mt-2 md:y-0 md:mt-0 w-fit ">
                {data.email}
              </p>
              <p className="italic mt-2">{data.shortSentence}</p>
              {/* <p>{data.phoneNumber}</p> */}
            </>
          ))}
      </div>
      <div className="flex flex-col my-3 md:self-start">
      <p className="font-semibold text-gray-400">Socials</p>
        {footerData &&
          footerData.map((data) =>
            data.socials.map((social) => (
              <a
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:bg-yellow-200 transition y-3 mt-2 "
              >
                {social.platform}
              </a>
            ))
          )}
      </div>
    </footer>
  );
}
