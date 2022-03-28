const movie = {
  title: 'Movie',
  name: 'movie',
  type: 'document',
  fields: [
    {
      title: 'Tittel',
      name: 'title',
      type: 'string',
      description: 'Tittel på filmen',
    },
    {
      title: 'Skuespiller',
      name: 'actor',
      type: 'reference',
      description: 'Navnet på stjernen',

      to: [
        {
          type: 'actor',
          title: 'Actor',
        },
      ],
    },
  ],
}
export default movie
