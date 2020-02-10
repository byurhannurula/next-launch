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
      stages
      success_rate_pct
      active
      name
      boosters
      company
      cost_per_launch
      country
      description
      engines {
        type
        number
        version
        propellant_1
        propellant_2
      }
      first_stage {
        engines
        reusable
        burn_time_sec
      }
      landing_legs {
        material
        number
      }
      second_stage {
        engines
        burn_time_sec
        fuel_amount_tons
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
