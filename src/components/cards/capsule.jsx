import React from 'react'

export const CapsuleCard = ({ data }) => (
  <div className="card">
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
        <li>
          <b>Crew Capacity:</b> {data.crew_capacity}
        </li>
        <li>
          <b>Height:</b> {data.height_w_trunk.meters}m
        </li>
        <li>
          <b>Diameter:</b> {data.diameter.meters}m
        </li>
        <li>
          <b>Launch Mass:</b> {data.dry_mass_kg}kg
        </li>
        <li>
          <b>Orbital Duration:</b> {data.orbit_duration_yr} years
        </li>
      </ul>
      <h3>Heat Shield:</h3>
      <ul>
        <li>
          <b>Size:</b> {data.heat_shield.size_meters}m
        </li>
        <li>
          <b>Max Temp.:</b> {data.heat_shield.temp_degrees} &deg;C
        </li>
        <li>
          <b>Material:</b> {data.heat_shield.material}
        </li>
        <li>
          <b>Partner:</b> {data.heat_shield.dev_partner}
        </li>
      </ul>
    </div>
  </div>
)
