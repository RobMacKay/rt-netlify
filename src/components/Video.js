import React, { Component } from 'react'
import video from '../img/video.mp4'

export default class Video extends Component {

  videoplay() {
    let thevideo = window.document.getElementById('myVideo');
    console.log(thevideo.paused)
    if(thevideo.paused) {
      thevideo.play()
    }
  }

  componentDidMount() {
    console.log("I Mounted...")
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
