import { Route, Routes } from 'react-router-dom'
import Movies from './components/Movies'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Actors from './components/Actors'
import AboutActors from './components/AboutActors'

export default function App() {
  return (
    <>
      <h1>sup bro</h1>

      <Navigation />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="actors">
          <Route index element={<Actors />} />
          <Route path=":aboutactor" element={<AboutActors />} />
        </Route>
      </Routes>
    </>
  )
}
