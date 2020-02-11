import React from 'react'
import { client } from '../lib/client'
import { rocketsQuery } from '../requests'

import { RocketCard } from '../components/cards'

const Rockets = ({ data }) => (
  <>
    <div
      className="page-header is-dark"
      style={{ background: "url('/bg-3.jpeg') bottom fixed" }}
    >
      <div className="container">
        <h1>Rockets</h1>
      </div>
    </div>
    <div className="container" style={{ marginTop: '-56px' }}>
      {data.rockets.map(node => (
        <RocketCard key={node.id} data={node} />
      ))}
    </div>
  </>
)

Rockets.getInitialProps = async () => {
  const data = await client
    .request(rocketsQuery)
    .catch(err => alert(`Error! ${err}`))

  return { data }
}

export default Rockets
