import React, { Component } from 'react'
import Data from './Data.json'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class PhotoList extends Component {
  state = {}
  render() {
    const category = this.props.match.params.category
    const index = this.props.match.params.index

    console.log(this.props)
    return (
      <>
        <h1>{Data[category].title}</h1>
        <h2>{Data[category].description}</h2>
        {Data[category].photos.map((photo, index) => {
          return (
            <figure>
              <img src={photo.imageURL} />
              <Link to={`/${category}/${index}`}>{photo.title}</Link>
            </figure>
          )
        })}
      </>
    )
  }
}

export default PhotoList
