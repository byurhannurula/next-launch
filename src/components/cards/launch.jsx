import React from 'react'

export const LaunchCard = ({ data }) => {
  return (
    <div className="card launch">
      <div className="col-50 flex items-center justify-center">
        {data.links.mission_patch_small ? (
          <img
            className="mission-image"
            src={data.links.mission_patch_small}
            alt={data.mission_name}
          />
        ) : (
          <p>No image for this mission!</p>
        )}
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
            Launch{' '}
            {data.launch_success === false ? 'Unsuccessful' : 'Successful'}
          </span>
          <span>
            <a
              href={data.links.video_link}
              rel="noopener noreferrer"
              target="_blank"
              title={data.links.video_link}
              aria-label={data.links.video_link}
              style={
                data.links.video_link !== null
                  ? { cursor: 'pointer' }
                  : { cursor: 'not-allowed' }
              }
            >
              {data.links.video_link !== null
                ? 'Watch on YouTube'
                : 'No Stream'}
            </a>
          </span>
        </div>
        <p>
          {data.details !== null
            ? data.details
            : 'No details yet for this mission!'}
        </p>
      </div>
    </div>
  )
}
