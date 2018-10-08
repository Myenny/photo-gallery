import React, { Component } from 'react'
import Data from './Data.json'

class PhotoList extends Component {
  state = {}
  render() {
    const category = this.props.match.params.category
    console.log(this.props)
    return (
      <>
        <h1>{Data[category].title}</h1>
        <h2>{Data[category].description}</h2>
        {Data[category].photos.map(photo => {
          return (
            <figure>
              <img src={photo.imageURL} />
              <a href="">{photo.title}</a>
            </figure>
          )
        })}
      </>
    )
  }
}

export default PhotoList
