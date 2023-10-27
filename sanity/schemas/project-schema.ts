// import { defineArrayMember, defineType } from "sanity";

const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    // {
    //   name: "date",
    //   title: "Date",
    //   type: "date",
    //   options: {
    //     dateFormat: 'YYYY-MM-DD',
    //   }
    // },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true }, // img zoomabe etc.
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    },
    {
      name: "url",
      title: "URL",
      type: "url"
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                    default: "/",
                  },
                ],
              },
            ],
          },
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Emphasis', value: 'em'},
            {title: 'Strong', value: 'strong'},
            {title: 'H1', value: 'h1'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'},
          ],
        },
        {
          type: "image",
          fields: [
            {
              name: "image",
              type: "image",
              title: "Image",
            },
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    }
  ]
}

export default project;
