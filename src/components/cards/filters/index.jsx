/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

import './styles.scss'

const Dropdown = ({ onClick, options, ...restProps }) => {
  return (
    <select onClick={onClick} {...restProps}>
      <option value="">Any</option>
      {options?.map((value, label) => (
        <option value={value}>{label}</option>
      ))}
    </select>
  )
}

export const FilterCard = ({ onClick }) => (
  <div className="card filter-card" style={{ minHeight: '100%' }}>
    <header>
      <h2>Filter Launches</h2>
    </header>
    <div className="inputs">
      <form action="">
        <label htmlFor="shipYear">
          Year:&nbsp;
          <Dropdown id="shipYear" onClick={onClick} />
        </label>
        <label htmlFor="shipStatus">
          Status:&nbsp;
          <Dropdown id="shipStatus" onClick={onClick} />
        </label>
        <label htmlFor="upcoming">
          Upcoming:&nbsp;
          <input type="checkbox" id="upcoming" />
        </label>
        <button type="button" className="search-btn" onClick={onClick}>
          Search
        </button>
      </form>
    </div>
  </div>
)
