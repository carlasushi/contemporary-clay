import Image from "next/image";
import Link from "next/link";
import urlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";

export const RichTextComponents = {
    types: {
      image: ({ value } : any) => {
        return (
          <div className="relative-width h-96 m-10 mx-auto">
            <Image
              className="object-contain"
              src={urlBuilder(value).url()}
              alt={value.alt || ' '}
              fill
            />
          </div>
        )
      }
    },
    // marks: {
      // Ex. 1: custom renderer for the em / italics decorator
      // em: ({children} : any) => <em className="text-gray-600 font-semibold">{children}</em>,

      // Ex. 2: rendering a custom `link` annotation
      // link: ({value, children} : any) => {
      //   const target = value?.href && !value?.href.startsWith('/')
      //     ? 'noreferrer noopener'
      //     : undefined

      //   return (
      //     <Link
      //     href={value?.href}
      //     target={target}
      //     rel={ target && 'noindex nofollow'}>
      //       {children}
      //     </Link>
      //   )
      // },
    // },
    marks: {
      link: ({value, children} : any) => {
        const target = value?.href && !value?.href.startsWith('/')
          ? 'noreferrer noopener'
          : undefined

        return (
          <Link
          href={value?.href}
          target={target}
          rel={ target && 'noindex nofollow'}
          className="underline  hover:text-yellow-600 tracking-wide ">
            {children}
          </Link>
        )
      },
    },

    list :{
      bullet: ({ children } : any) => (
        <ul className="ml-10 py-5 list-disc space-y-5 mt-3">{children}</ul>
      ),
      number: ({ children } : any) => (
        <ol className="ml-10 py-5 list-disc space-y-5 mt-3">{children}</ol>
      ),
  // const YourComponent = (props) => {
  //   return <PortableText value={props.value} components={myPortableTextComponents} />
    },
    block: {
      // Ex. 1: customizing common block types
      h1: ({children} : any) => <h1 className="text-4xl py-2 mb-3">{children}</h1>,
      h2: ({children} : any) => <h1 className="text-3xl py-2 mb-3">{children}</h1>,
      h3: ({children} : any) => <h1 className="text-2xl py-2 mb-3">{children}</h1>,
      h4: ({children} : any) => <h1 className="text-xl py-2 mb-3">{children}</h1>,

      blockquote: ({children} : any) => <blockquote className="border-l-purple-500">{children}</blockquote>,
  }
}