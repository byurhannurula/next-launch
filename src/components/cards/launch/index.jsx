import React from 'react'

export const LaunchCard = ({ data }) => (
  <div className="card">
    <div className="col-25">
      <img src={data.links.mission_patch_small} alt="" />
    </div>
    <div className="col-50">
      <header>
        <h2>{data.mission_name}</h2>
      </header>
      <div className="buttons">
        {/* <span
          style={{
            backgroundColor: data.active === false ? '#ff3860' : '#00d1b2',
          }}
        >
          Status {data.active === false ? 'Inactive' : 'Active'}
        </span> */}
        <span>
          <a
            href={data.links.video_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on TouTube
          </a>
        </span>
        <span>
          <a
            href={data.links.wikipedia}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read on Wikipedia
          </a>
        </span>
      </div>
      <p>{data.details}</p>
    </div>
    <div className="col-25">&nbsp;</div>
  </div>
)
