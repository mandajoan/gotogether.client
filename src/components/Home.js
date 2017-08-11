import React from 'react'
import auth from '../auth'
import ShowHide from './ShowHide'
import Event from './Event'
import {NavLink} from 'react-router-dom'

class Home extends React.Component {

  state = {
    events: [],
    currentEvent: null
  }


  componentDidMount() {
    auth.getEvents().then(events => {
      this.setState({events:events})
      console.log(events)
    })
  }

  clickHandle(id){
    this.setState({currentEvent: null})
    auth.getEvent(id).then(event => {
      this.setState({currentEvent: event})
      console.log(this.state.currentEvent);
      })
  }

  render() {
    const
      currentUser = this.props.currentUser
      var eId =''

    return (

      <div>
        {currentUser
            ? <p>Current User: {currentUser.name}</p>
            : null
          }
        <h1>Events</h1>

            <div>
              <ul id="eventsList">

                {this.state.events.map(event => {
                eId = event._id
                return <li key={event._id} onClick={this.clickHandle.bind(this, event._id)}>{event.title}</li>
                })}
              </ul>
            </div>

            <div id="container">

                <ShowHide currentUser={currentUser} />


            </div>


        <div>
          {this.state.currentEvent ?
            <Event event={this.state.currentEvent}/>
            :
            null
          }

        </div>

        </div>

    )
  }
}

export default Home
