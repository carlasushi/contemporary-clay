import Image from "next/image";
import Link from "next/link";
import urlBuilder from "@sanity/image-url";

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
    marks: {
      // customFont: ({children} : any) => <span style={{ fontFamily: 'sans-serif', WebkitFontSmoothing: 'antialiased' }}>{children}</span>,

      link: ({value, children} : any) => {
        const target = value?.href && !value?.href.startsWith('/')
          ? 'noreferrer noopener'
          : undefined

        return (
          <Link
          href={value?.href}
          target={target}
          rel={ target && 'noindex nofollow'}
          className="underline  hover:text-yellow-600 tracking-wide visited:text-yellow-900 py-3 leading-relaxed">
            {children}
          </Link>
        )
      },
    },


    // list: {
    //   bullet: ({ children } : any) => (
    //     <ul className="ml-10 py-5 list-disc space-y-5 mt-3">
    //       {React.Children.map(children, (child, index) =>
    //         React.cloneElement(child, { key: index })
    //       )}
    //     </ul>
    //   ),
    //   number: ({ children } : any) => (
    //     <ol className="ml-10 py-5 list-disc space-y-5 mt-3">
    //       {React.Children.map(children, (child, index) =>
    //         React.cloneElement(child, { key: index })
    //       )}
    //     </ol>
    //   ),
    // },

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
      h1: ({children} : any) => <h1 className="text-4xl lg:text-6xl py-2 my-3 uppercase font-mono text-teal-600">{children}</h1>,
      h2: ({children} : any) => <h1 className="text-3xl  lg:text-5xl py-2 my-3 uppercase font-mono text-teal-600">{children}</h1>,
      h3: ({children} : any) => <h1 className="text-2xl  lg:text-4xl py-2 my-3 uppercase font-mono text-teal-600">{children}</h1>,
      h4: ({children} : any) => <h1 className="text-xl  lg:text-3xl py-2 my-3 uppercase font-mono text-teal-600">{children}</h1>,

      blockquote: ({children} : any) => <blockquote className="border-l-yellow-500">{children}</blockquote>,
  }
}
