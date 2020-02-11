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

export const launchesQuery = `
  query {
    launches(limit: 50) {
      id
      details
      mission_name
      launch_date_local
      launch_success
      launch_year
      rocket {
        rocket_name
      }
      launch_site {
        site_name_long
      }
      links {
        mission_patch_small
        mission_patch
        video_link
        wikipedia
      }
    }
  }
`

export const upcomingLaunchesQuery = `
  query {
    launchesUpcoming(limit: 50) {
      id
      details
      mission_name
      launch_date_local
      launch_success
      launch_year
      rocket {
        rocket_name
      }
      launch_site {
        site_name_long
      }
      links {
        mission_patch_small
        mission_patch
        video_link
        wikipedia
      }
      upcoming
    }
  }
`
