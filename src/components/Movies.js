import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import { getMovies, getMovieActors } from '../lib/movieService'

export default function Movies({ title, actor }) {
  useEffect(() => {
    const getMoviesData = async () => {
      const movies = await getMovies()
      setMovies(movies.sort((a, b) => (a.title > b.title ? 1 : -1)))
    }
    getMoviesData().catch(error)

    const getMovieActorData = async () => {
      const movieActors = await getMovieActors()
    }
    getMovieActorData().catch(error)
  }, [])

  return (
    <button>
      {movies?.map((movie, index) => (
        <Movie key={index} title={movie.title} actor={movie.actor} />
      ))}
    </button>
  )
}
