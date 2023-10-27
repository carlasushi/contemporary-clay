import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _created_at: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: (PortableTextBlock )[]; // sanity stores rich content like this https://www.sanity.io/docs/block-content
  description: string;
}
