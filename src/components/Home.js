import React from 'react'
import auth from '../auth'
import ShowHide from './ShowHide'

class Home extends React.Component {

  state = {
    events: [],
    locations: [],
  }

  locationArr(){
    if(this.state.events.location !== this.locations){
      this.setState({locations: this.state.events.location + this.locations})
      }
    }


  componentDidMount() {
    auth.getEvents().then(events => {
      this.setState({events})
    })
  }




  render() {
    return (

      <div>
        <h1>Events</h1>

            <div>
              <ul>
                {this.state.events.map(event => (
                  <li key={event._id}>{event.title}</li>
                ))}
              </ul>
            </div>
            <div id="container">
              <ShowHide />
            </div>

        </div>
    )
  }
}

export default Home
