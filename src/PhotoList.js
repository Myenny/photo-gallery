import React, { Component } from 'react'
import Data from './Data.json'

class PhotoList extends Component {
  state = {}
  render() {
    return (
      <>
        <h1>{Data['pandas'].title}</h1>
        <h2>{Data['pandas'].description}</h2>
        {Data['pandas'].photos.map(photo => {
          return (
            <figure>
              <img src={photo.image} />
              <a href="">{photo.image}</a>
            </figure>
          )
        })}
      </>
    )
  }
}

export default PhotoList
