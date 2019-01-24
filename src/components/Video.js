import React from 'react'
import video from '../img/video.mp4'

export default function Video() {
  return (
    <video playsinline autoplay="true" muted="true" loop="true" id="myVideo">
        <source src={video} type="video/mp4" />
    </video>
  )
}
