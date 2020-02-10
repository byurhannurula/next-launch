export const companyQuery = `
  query {
    company {
      ceo
      coo
      cto_propulsion
      employees
      founded
      founder
      name
      summary
      vehicles
      test_sites
      launch_sites
    }
  }
`

export const rocketsQuery = `
  query {
    rockets {
      id
      type
      wikipedia
      active
      name
      boosters
      description
      engines {
        type
        number
        version
        propellant_1
        propellant_2
      }
      landing_legs {
        material
        number
      }
      mass {
        kg
      }
      payload_weights {
        kg
        name
      }
      height {
        meters
      }
      diameter {
        meters
      }
    }
  }
`

export const capsulesQuery = `
  query {
    dragons {
      id
      name
      type
      active
      wikipedia
      crew_capacity
      description
      dry_mass_kg
      diameter {
        meters
      }
      height_w_trunk {
        meters
      }
      heat_shield {
        material
        dev_partner
        size_meters
        temp_degrees
      }
      orbit_duration_yr
    }
  }
`
