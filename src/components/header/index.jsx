import React from 'react'
import Link from 'next/link'

import Navigation from './navigation'

import './styles.scss'

const Header = () => (
  <header className="header">
    <div className="container">
      <Link href="/">
        <a className="logo">
          Next Launch{' '}
          <span role="img" aria-label="Rocket">
            🚀
          </span>
        </a>
      </Link>

      <Navigation />
    </div>
  </header>
)

export default Header
