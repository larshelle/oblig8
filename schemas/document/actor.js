const actor = {
  title: 'Actor',
  name: 'actor',
  type: 'document',
  fields: [
    {
      title: 'Fullt navn',
      name: 'fullname',
      type: 'string',
      description: 'Fullt navn på hovedskuespilleren',
    },
    {
      title: 'Slug',
      name: 'name',
      type: 'slug',
      description: 'URL',
    },
  ],
}

export default actor
