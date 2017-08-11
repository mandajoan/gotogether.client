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

//brings in react route from auth file and sets state of events
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
    document.getElementById('userDiv').style.display="block";
  }



  render() {
    const
      currentUser = this.props.currentUser
      var currentEvent = this.state.currentEvent
      var eId =''

    return (

  <div>
    <div id="header">
      <img id="logo" src="../logo.png"/>
    </div>

      <div className="container">
        <div className="row">

          <div className="col-sm-6">
            <h2>Events</h2>
            <div>
              <ul id="eventsList">
                {this.state.events.map(event => {
                eId = event._id
                return <li key={event._id} onClick={this.clickHandle.bind(this, event._id)}><h4> + {event.title}, {event.location}</h4></li>
                })}
              </ul>
            </div>
          </div>
          <div className="col-sm-6">
            <h2>Selected Event</h2>
            <div>
                {this.state.currentEvent ?
                  <Event event={currentEvent}/>
                  :
                  null
                }
            </div>
          </div>

        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <div id="newEventContainer">
                <ShowHide currentUser={currentUser} />
            </div>
          </div>
          <div className="col-sm-6">
            <div id="userDiv">
              <img src="../usersPic.png"/>
            </div>

          </div>

        </div>
      </div>
</div>

    )
  }
}

export default Home
