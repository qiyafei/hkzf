import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

class Hkzf extends React.Component {
  render() {
    return (
      <div className="App">
        <App />
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <Hkzf />
  </Router>,
  document.getElementById('root')
)
