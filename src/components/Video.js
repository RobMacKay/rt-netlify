import React, { Component } from 'react'
import video from '../img/video.mp4'

export default class Video extends Component {

  videoplay() {
    let thevideo = window.document.getElementById('myVideo'); 
    window.document.addEventListener('DOMContentLoaded',function(){ thevideo.play(); },false);
  }

  componentDidMount() {
    this.videoplay()
  }

  render() {
    return (
      <video playsinline autoplay muted loop id="myVideo">
        <source src={video} type="video/mp4" />
      </video>
    )
  }
}
