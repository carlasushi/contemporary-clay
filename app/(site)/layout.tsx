import { Metadata } from "next";
import { getPages, getFooterData } from "@/sanity/sanity-utils";
import "../globals.css";
import Link from "next/link";
import Footer from "./components/global/footer"

export const metadata: Metadata = {
  title: "Contemporary Ceramics Course by Carla Paloma",
  description: "A site made to aid students in their learning experience",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get all pages
  const pages = await getPages();
  // get footer
  const footerData = await getFooterData()

  return (
    <html lang="en">
      <body className="container py-3 mx-auto font-light antialiased ">
        <header className="top-0 sticky p-5 md:p-0 lg:px-14 bg-blend-multiply backdrop-blur-lg opacity-90 md:text-xl">
          <div className="flex items-center justify-between md:px-3 lg:mx-10 lg:px-10  h-20">
            <Link
              href="/"
              className="capitalize underline  hover:bg-yellow-200 transition y-3"
            >
              Home
            </Link>
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className="capitalize underline  hover:bg-yellow-200 transition y-3"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main>{children}</main>
        {/* <Footer content={footer.content} links={[]} /> */}
        <Footer params={{footer: ""}}  />
      </body>
    </html>
  );
}
