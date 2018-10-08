import React, { Component } from 'react'
import Data from './Data.json'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class PhotoDetails extends Component {
  state = {}
  render() {
    const category = this.props.match.params.category
    const index = this.props.match.params.index

    return (
      <acticle>
        <h2>{Data[category].photos[index].title}</h2>
        <img src={Data[category].photos[index].imageURL} />
        <a href={Data[category].photos[index].sourceURL}>Source</a>
      </acticle>
    )
  }
}

export default PhotoDetails
