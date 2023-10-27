const footer = {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    {
      name: 'socials',
      type: 'array',
      title: 'Socials',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              type: 'string',
              title: 'Platform'
            },
            {
              name: 'url',
              type: 'string',
              title: 'URL'
            }
          ]
        }
      ]
    },
    {
      name: 'shortSentence',
      type: 'string',
      title: 'Short Sentence'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'phoneNumber',
      type: 'string',
      title: 'Phone Number'
    }
  ]
}

export default footer
