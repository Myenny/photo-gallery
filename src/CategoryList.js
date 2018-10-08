import React, { Component } from 'react'
import Data from './Data'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class CategoryList extends Component {
  state = {}
  render() {
    console.log(Object.keys(this.props))
    return (
      <>
        <section>
          {Object.keys(Data).map((category, i) => {
            return (
              <div className="column">
                <div className="card-content">
                  <h1>
                    <Link to={`/${category}`}>{Data[category].title}</Link>
                  </h1>
                  <p>{Data[category].description}</p>
                </div>
                <img src={Data[category].photos[i].imageURL} />
              </div>
            )
          })}
        </section>
      </>
    )
  }
}

export default CategoryList
