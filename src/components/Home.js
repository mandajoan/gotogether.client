import React from 'react'
import auth from '../auth'
import ShowHide from './ShowHide'

class Home extends React.Component {

  state = {
    events: [],
    ev: []
  }


// handleClick(evt){
//goal is to take clicked item and push it into the
//state array
//then display
//   })
// }


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
                  <li key={event._id} >{event.title}</li>
                  //need to finsih this.. ask for help i guess
                  // <a href='#' onClick={this.handleClick.bind(this)}></a>
                ))}
              </ul>
            </div>
            <div id="container">

                <ShowHide />


            </div>


        <div>
          <h1>this.state.ev.title</h1>
          <p>
            //where selected event will go
          </p>
        </div>

        </div>

    )
  }
}

export default Home
