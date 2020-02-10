import React from 'react'
import Link from 'next/link'

const Header = () => (
  <header className="header">
    <div className="container">
      <Link href="/">
        <a className="logo">SpaceX</a>
      </Link>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link href="/launches">
              <a className="nav__link">Launches</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/rockets">
              <a className="nav__link">Rockets</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/capsules">
              <a className="nav__link">Capsules</a>
            </Link>
          </li>
          <li className="nav__item">
            <a
              className="nav__link"
              href="https://github.com/byurhanbeyzat/next-launch"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="/github.png" alt="Github icon" />
              Github
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
