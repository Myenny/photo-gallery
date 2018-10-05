import React, { Component } from 'react'
import './App.css'
import CategoryList from './CategoryList'
import PhotoList from './PhotoList'
import PhotoDetails from './PhotoDetails'

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <main>
        <header>
          <h1>Things I like</h1>
          <h2>A Photo Gallery By Michael Yenny</h2>
        </header>
        <nav>
          <ul>
            <li>Home</li>
          </ul>
        </nav>

        <CategoryList />
        <PhotoList />
        <PhotoDetails />
      </main>
    )
  }
}

export default App
