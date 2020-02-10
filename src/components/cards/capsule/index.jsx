import React from 'react'

import './styles.scss'

export const CapsuleCard = ({ data }) => (
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

    <div className="col-50">
      <h3>Specifications:</h3>
      <ul>
        <li>Height: {data.height_w_trunk.meters}m</li>
        <li>Diameter: {data.diameter.meters}m</li>
        <li>Launch Mass: {data.dry_mass_kg}kg</li>
        <li>Crew Capacity: {data.crew_capacity}</li>
        <li>Orbital Duration: {data.orbit_duration_yr} years</li>
      </ul>
      <h3>Heat Shield:</h3>
      <ul>
        <li>Size: {data.heat_shield.size_meters}m</li>
        <li>Max Temp.: {data.heat_shield.temp_degrees}C</li>
        <li>Material: {data.heat_shield.material}</li>
        <li>Partner: {data.heat_shield.dev_partner}</li>
      </ul>
    </div>
  </div>
)
