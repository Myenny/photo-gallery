import React, { Component } from 'react'
import Data from './Data'
class CategoryList extends Component {
  state = {}
  render() {
    console.log(Object.keys(Data))
    return (
      <>
        <section>
          {Object.keys(Data).map((category, i) => {
            return (
              <div className="column">
                <div className="card-content">
                  <h1>{Data[category].title}</h1>
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
