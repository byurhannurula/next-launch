import React from 'react'
import { client } from '../lib/client'
import { capsulesQuery } from '../requests'

import { CapsuleCard } from '../components/cards'

const Capsules = ({ data }) => (
  <>
    <div
      className="page-header is-dark"
      style={{ background: "url('/bg-1.jpeg') fixed" }}
    >
      <div className="container">
        <h1>Capsules</h1>
      </div>
    </div>
    <div className="container" style={{ marginTop: '-56px' }}>
      {data.dragons.map(node => (
        <CapsuleCard key={node.id} data={node} />
      ))}
    </div>
  </>
)

Capsules.getInitialProps = async () => {
  const data = await client
    .request(capsulesQuery)
    .catch(err => alert(`Error! ${err}`))

  return { data }
}

export default Capsules
