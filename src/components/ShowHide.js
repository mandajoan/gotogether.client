import React from 'react'
import NewEvent from './NewEvent'

class ShowHide extends React.Component {
  constructor(){
    super()
    this.state = {
      childVisible: false
    }
  }

  render(){
    return(
      <div>
        <div onClick={() => this.onClick()}>
          <input type='submit' value='New Event' />
        </div>
          {
            this.state.childVisible ? <NewEvent /> : null
          }
      </div>
    )
  }

onClick(){
  this.setState({childVisible: !this.state.childVisible})
}

}
export default ShowHide
