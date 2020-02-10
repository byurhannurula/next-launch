import React from 'react'

import './styles.scss'

export const RocketCard = ({ data }) => (
  <div className="rocket">
    <div className="col-50">
      <header>
        <h2>{data.name}</h2>
      </header>
      <div className="buttons">
        <span
          style={{
            backgroundColor: data.active === false ? '#ff3860' : '#00d1b2',
          }}
        >
          Status {data.active === false ? 'Inactive' : 'Active'}
        </span>
        <span>
          <a href={data.wikipedia} target="_blank" rel="noopener noreferrer">
            Read on Wikipedia
          </a>
        </span>
      </div>
      <p>{data.description}</p>
    </div>
    <div className="col-25">
      <h3>Specifications:</h3>
      <ul>
        <li>Height: {data.height.meters}m</li>
        <li>Diameter: {data.diameter.meters}m</li>
        <li>Mass: {data.mass.kg}kg</li>
        <li>Boosters: {data.boosters}</li>
      </ul>
      <h3>Engines:</h3>
      <ul>
        <li>Engine: {data.engines.number}</li>
        <li>Type: {data.engines.type}</li>
        <li>Version: {data.engines.version}</li>
        <li>Propellant 1: {data.engines.propellant_1}</li>
        <li>Propellant 2: {data.engines.propellant_2}</li>
      </ul>
    </div>
    <div className="col-25">
      <h3>Landing Legs:</h3>
      <ul>
        <li>Number: {data.landing_legs.number}</li>
        <li>Material: {data.landing_legs.material}</li>
      </ul>
      <h3>Payload Weights:</h3>
      <ul>
        <li>Name: {data.payload_weights[0].name}</li>
        <li>Weight: {data.payload_weights[0].kg}kg</li>
      </ul>
    </div>
  </div>
)
