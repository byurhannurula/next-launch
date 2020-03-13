import React from 'react'

export const LaunchCard = ({ data }) => (
  <div className="card">
    <div className="col-25">
      <img src={data.links.mission_patch_small} alt="" />
    </div>
    <div className="col-50">
      <header>
        <h2>{data.mission_name}</h2>
        <h4 title={data.launch_site.site_name_long}>
          {data.launch_site.site_name} &ndash;{' '}
          {new Date(data.launch_date_local).toLocaleDateString()}
        </h4>
      </header>
      <div className="buttons">
        <span
          style={{
            backgroundColor:
              data.launch_success === false ? '#ff3860' : '#00d1b2',
          }}
        >
          Launch {data.launch_success === false ? 'Unsuccessful' : 'Successful'}
        </span>
        <span>
          <a
            href={data.links.video_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on TouTube
          </a>
        </span>
      </div>
      <p>{data.details}</p>
    </div>
    {/* <div className="col-25">
      <h3>Mission Details</h3>
      <ul>
        <li>
          <b>Flight Number:</b>
        </li>
        <li>Height: m</li>
        <li>Diameter: m</li>
        <li>Mass: kg</li>
        <li>Boosters: </li>
      </ul>
    </div> */}
  </div>
)
