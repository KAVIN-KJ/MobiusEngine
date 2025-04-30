import React from 'react'
import './VideoCard.css'
const VideoCard = () => {
  return (
    <div>
      <div className="card">
      <div className="card-top">
        <div className="play-button">&#9654;</div>
      </div>
      <div className="card-bottom">
        <p>
          Holly is a <strong>senior executive</strong> who got over <strong>10 job interviews</strong> and an offer she accepted
        </p>
        <br />
        <div className="arrow-button">&#8599;</div>
      </div>
    </div>
    </div>
  )
}

export default VideoCard
