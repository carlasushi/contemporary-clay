const page = {
  name: "page",
  title: "Pages",
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: "title",
        maxLength: "100"
      }
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
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'}
      ],
  },
  ],
}

export default page;
