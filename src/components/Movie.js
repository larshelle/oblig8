import Movies from './Movies'

export default function Movie({ title, actor }) {
  return (
    <>
      <ul>
        <li>Title: {title}</li>
        <li>Actor: {actor}</li>
      </ul>
    </>
  )
}
