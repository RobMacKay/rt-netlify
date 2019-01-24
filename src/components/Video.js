import React from 'react'
import video from '../img/video.mp4'

export default function Video() {
  
  let thevideo = document.getElementById('myVideo'); 
  thevideo.addEventListener('DOMContentLoaded',function(){ video.play(); },false);
  
  return (
    <video playsinline autoplay muted loop id="myVideo">
        <source src={video} type="video/mp4" />
    </video>
  )
}