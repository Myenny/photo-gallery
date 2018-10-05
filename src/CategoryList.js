import React, { Component } from 'react'

class CategoryList extends Component {
  state = {}
  render() {
    return (
      <>
        <section>
          <div className="column">
            <div className="card-content">
              <h1>Gold and Gems</h1>
              <p>
                Pandas are bears native to south-central China, and are
                objectively the cutest animals on earth."
              </p>
            </div>
            <img src="https://cdn-images-1.medium.com/max/1600/1*i1vVm3EqqDIkyucD0079wg.jpeg" />
          </div>
          <div className="column">
            <div className="card-content">
              <h1>Traveling</h1>
              <p>
                I enjoy painting miniatures. I've only been painting for about
                6-months, here's some of my work."
              </p>
            </div>
            <img src="https://instagram.ftpf1-1.fna.fbcdn.net/vp/ac13de8676b9e7d7b3a4f1aaf38a9a55/5C3728A2/t51.2885-15/e35/32203464_178578342778306_8009127367152762880_n.jpg" />
          </div>
        </section>
      </>
    )
  }
}

export default CategoryList
