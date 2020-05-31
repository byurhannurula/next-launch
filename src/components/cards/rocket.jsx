import React from 'react'

export const RocketCard = ({ data }) => (
  <div className="card">
    <div className="col-50">
      <header>
        <h2>{data.name}</h2>
      </header>
      <div className="buttons">
        <span
          style={{
            backgroundColor: data.active === false ? '#ff3860' : '#00d1b2'
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
        <li>
          <b>Height:</b> {data.height.meters}m
        </li>
        <li>
          <b>Diameter:</b> {data.diameter.meters}m
        </li>
        <li>
          <b>Mass:</b> {data.mass.kg}kg
        </li>
        <li>
          <b>Boosters:</b> {data.boosters}
        </li>
      </ul>
      <h3>Engines:</h3>
      <ul>
        <li>
          <b>Engine:</b> {data.engines.number}
        </li>
        <li>
          <b>Type:</b> {data.engines.type}
        </li>
        <li>
          <b>Version:</b> {data.engines.version}
        </li>
        <li>
          <b>Propellant 1:</b> {data.engines.propellant_1}
        </li>
        <li>
          <b>Propellant 2:</b> {data.engines.propellant_2}
        </li>
      </ul>
    </div>
    <div className="col-25">
      <h3>Landing Legs:</h3>
      <ul>
        <li>
          <b>Number:</b> {data.landing_legs.number}
        </li>
        <li>
          <b>Material:</b> {data.landing_legs.material}
        </li>
      </ul>
      <h3>Payload Weights:</h3>
      <ul>
        <li>
          <b>Name:</b> {data.payload_weights[0].name}
        </li>
        <li>
          <b>Weight:</b> {data.payload_weights[0].kg}kg
        </li>
      </ul>
    </div>
  </div>
)
