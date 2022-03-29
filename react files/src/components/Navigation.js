import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'activated' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) => (isActive ? 'activated' : '')}
          >
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/actors"
            className={({ isActive }) => (isActive ? 'activated' : '')}
          >
            Actors
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
