import React from 'react'
import auth from '../auth'


class Event extends React.Component{

  state = {
    event: {},

  }

  componentDidMount() {
    // auth.getEvent(this.props.eventId).then(event => {
      this.setState({event: this.props.event})
      console.log(this.state.event);

    //   console.log(event)
    // })
  }



  render(){
    const eventId = this.props.eventId
    return(
      <div className="eventWhole">
      <div className="Event">
        <h4> +Event: {this.state.event.title}</h4>
        <h4> +Location: {this.state.event.location}</h4>
        <h4> +Category: {this.state.event.category}</h4>
        <h4> +Description: {this.state.event.description}</h4>
        <a className="button" href="#"><h4>+Going</h4></a>
      </div>
      <div id="usersEvent">

      </div>

      </div>
    )
  }
}
export default Event
