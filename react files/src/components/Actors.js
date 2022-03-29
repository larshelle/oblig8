import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getActors } from '../lib/movieService'

export default function Actors() {
  const [actors, setActors] = useState()

  useEffect(() => {
    const getActorsData = async () => {
      const actors = await getActors()
      setActors(actors.sort((a, b) => (a.fullname > b.fullname ? 1 : -1)))
    }
    getActorsData().catch(error)
  })

  return (
    <>
      {actors?.map((actor, index) => (
        <div key={index} className="actor-info">
          <h2>{actor.fullname}</h2>
          <Link to={`/actors/${actor.slug}`}>Read More</Link>
        </div>
      ))}
    </>
  )
}
