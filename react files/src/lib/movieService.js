import client from './client'

const movieFields = `
  title,
  "actor": actor->actor,
`

const actorFields = `
  name,
  "slug": slug.current,
`

const actorFields = `
  name,
  "slug": slug.current,
  "relatedMovies": *[_type=='movie' && references(^._id)]{ 
  	title,
	}
`

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`)
  return data
}

export const getActors = async () => {
  const data = await client.fetch(`*[_type == "actor"]{${actorFields}}`)
  return data
}

export const getActorName = async (actorName) => {
  const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`)
  const actorslug = await client.fetch(
    `*[_type == "actor" && slug.current == $actorName]{${actorFields}}`,
    {actorName,}
  )

  const newData = [...data, ...actorslug]
  return newData
}

export const getMovieActors = async (actorName) => {
  const data = await client.fetch(
    `*[_type=="movie" && slug.current == $movieTitle]{${movieFields}}`,
    { actorName }
  )
  return data?.[0]
}
