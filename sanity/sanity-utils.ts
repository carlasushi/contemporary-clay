import { Project } from "@/types/Project";
import { Page } from "@/types/Page";
import { Footer } from "@/types/Footer";
import { createClient, groq } from "next-sanity";
import  clientConfig  from "./config/client-config";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content[]{
        ...,
        markDefs[]{
          ...,
          href
        },
        children[]{
          ...,
          markDefs[]{
            ...,
            href
          }
        }
      },
      description
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content[]{
        ...,
        markDefs[]{
          ...,
          href
        },
        children[]{
          ...,
          markDefs[]{
            ...,
            href
          }
        }
      },
      description
    }`,
    { slug: slug }
  );
}

// limited information bc I want to include it in the navbar as links
export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`
  );
}

// this time I want the content and image bc it is an individual page
export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    // you have slug[0] bc you want the ONE that matches that slug out of the array of projectS.
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content,
      "image": image.asset->url,
    }`,
    { slug: slug }
  );
}

// fetching footer data
export async function getFooterData(): Promise<Footer[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "footer"]{
      _id,
      socials[] {
        platform,
        url
      },
      email,
      shortSentence,
      phoneNumber
    }`
  )
}
