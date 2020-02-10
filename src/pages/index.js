import React from 'react'
import { client } from '../lib/client'
import { companyQuery } from '../requests'

const Home = ({ res }) => (
  <div className="bg-1">
    <div className="container">
      <h1>Welcome to Next Launch!</h1>
      <h2>About {res.name}</h2>
      <p style={{ width: '55%' }}>{res.summary}</p>
      <h2>Company Info</h2>
      <ul>
        <li>Founded: {res.founded}</li>
        <li>Employees: {res.employees}</li>
        <li>Launch Sites: {res.launch_sites}</li>
        <li>Test Sites: {res.test_sites}</li>
        <li>Vehices: {res.vehicles}</li>
      </ul>
      <h2>Company Leadership</h2>
      <ul>
        <li>CEO/CTO: {res.ceo}</li>
        <li>COO: {res.coo}</li>
        <li>CTO of Propulsion: {res.cto_propulsion}</li>
      </ul>
    </div>
  </div>
)

Home.getInitialProps = async () => {
  const data = await client
    .request(companyQuery)
    .catch(err => alert(`Error! ${err}`))

  return { res: data.company }
}

export default Home
