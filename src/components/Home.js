import React from 'react'
import auth from '../auth'

class Home extends React.Component {

  state = {
    events: []
  }

  componentDidMount() {
    auth.getEvents().then(events => {
      this.setState({events})
    })
  }


  render() {
    return (
      <div>
        <h1>This is the HOME page.</h1>
        <ul>
          {this.state.events.map(event => (
            <li key={event._id}>{event.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
