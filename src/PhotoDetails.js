import React, { Component } from 'react'
import Data from './Data.json'

class PhotoDetails extends Component {
  state = {}
  render() {
    return (
      <>
        <h2>{Data['pandas'].photos[0].title}</h2>
        <img src={Data['pandas'].photos[0].imageURL} />
        <a href={Data['pandas'].photos[0].sourceURL}>Jewels</a>
      </>
    )
  }
}

export default PhotoDetails
