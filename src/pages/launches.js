import React from 'react'
import { client } from '../lib/client'
import { launchesQuery } from '../requests'

import { LaunchCard, FilterCard } from '../components/cards'

const Launches = ({ data }) => (
  <>
    <div
      className="page-header is-dark"
      style={{ background: "url('/bg-2.jpeg') top fixed" }}
    >
      <div className="container">
        <h1>SpaceX Launches</h1>
      </div>
    </div>
    <div className="container" style={{ marginTop: '-56px' }}>
      <FilterCard />
      {data.launches.map(node => (
        <LaunchCard key={node.id} data={node} />
      ))}
    </div>
  </>
)

Launches.getInitialProps = async () => {
  const launches = await client
    .request(launchesQuery)
    .catch(err => alert(`Error! - ${err}`))

  return { data: launches }
}

export default Launches
