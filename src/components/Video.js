import React from 'react'
import video from '../img/video.mp4'

export default function Video() {
  return (
    <video playsinline autoplay muted loop id="myVideo">
        <source src={video} type="video/mp4" />
    </video>
  )
}

var video = document.getElementById('myVideo'); 
video.addEventListener('DOMContentLoaded',function(){ video.play(); },false);
