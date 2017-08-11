import React from 'react'
import auth from '../auth'


class Event extends React.Component{

  state = {
    event: {}
  }

  componentDidMount() {
    // auth.getEvent(this.props.eventId).then(event => {
      this.setState({event: this.props.event})
      console.log('evenenbefk');
      console.log(this.state.event);
    //   console.log(event)
    // })
  }

  render(){
    const eventId = this.props.eventId
    return(
      <div className="Event">
        <h1>{this.state.event.title}</h1>
        <h2>{this.state.event.location}</h2>
        <h3>{this.state.event.category}</h3>
        <p>{this.state.event.description}</p>

      </div>
    )
  }
}
export default Event
