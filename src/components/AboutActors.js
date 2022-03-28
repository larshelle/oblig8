import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getMovieActor } from '../lib/movieService'

export default function AboutActors() {
  const { actorname } = useParams()
  const [actor, setActor] = useState()

  useEffect(() => {
    const getMovieActorData = async () => {
      const movieActors = await getMovieActor(actorname)
      setActor(movieActors.fullname)
    }
    getMovieActorData().catch(error)
  })

  return (
    <div>
      {actor?.map((movies, index) => (
        <div key={index}>
          {(() => {
            if (index === 0) {
              return (
                <>
                  <h2>{actor}</h2>
                  <p>Starring in:</p>
                  <p>
                    <b>{movies.title}</b>
                  </p>
                </>
              )
            }
          })()}
        </div>
      ))}
    </div>
  )
}
