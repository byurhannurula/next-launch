/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { Formik } from 'formik'
import { yearOptions, statusOptions } from './options'

import './styles.scss'

const Dropdown = ({ options, ...restProps }) => (
  <select {...restProps}>
    <option value="">Any</option>
    {options?.map(({ value, id }) => (
      <option value={value} key={id}>
        {value}
      </option>
    ))}
  </select>
)

export const FilterCard = () => {
  return (
    <div className="card filter-card" style={{ minHeight: '100%' }}>
      <header>
        <h2>Filter Launches</h2>
      </header>
      <div className="inputs">
        <Formik
          initialValues={{ shipYear: '', shipStatus: '', isUpcoming: false }}
          onSubmit={result => {
            console.log(result)
          }}
        >
          {({ values, isSubmitting, handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="shipYear">
                Year:&nbsp;
                <Dropdown
                  value={values.year}
                  onChange={handleChange}
                  options={yearOptions}
                  name="shipYear"
                  id="shipYear"
                />
              </label>
              <label htmlFor="shipStatus">
                Status:&nbsp;
                <Dropdown
                  value={values.status}
                  onChange={handleChange}
                  options={statusOptions}
                  name="shipStatus"
                  id="shipStatus"
                />
              </label>
              <label htmlFor="isUpcoming">
                Upcoming:&nbsp;
                <input
                  type="checkbox"
                  onChange={handleChange}
                  value={values.isUpcoming}
                  name="isUpcoming"
                  id="isUpcoming"
                />
              </label>
              <button
                type="submit"
                className="search-btn"
                disabled={isSubmitting}
              >
                Search
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  )
}
