import React from 'react'
import { useParams } from 'react-router-dom'

function VideoDetail() {
    const {VideoId}=useParams();
  return (
    <div>VideoDetail{VideoId}</div>
  )
}

export default VideoDetail