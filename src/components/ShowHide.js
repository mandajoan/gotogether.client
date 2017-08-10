import React from 'react'
import NewEvent from './NewEvent'
import auth from '../auth'

class ShowHide extends React.Component {
  constructor(){
    super()
    this.state = {
      childVisible: false,
      currentUser : auth.getCurrentUser()
    }
  }
  onClick(){
      if(this.state.currentUser !== null){
        this.setState({childVisible: !this.state.childVisible})
      }

    }

  render(){
    return(
      <div>

          <div onClick={() => this.onClick()}>
            <input type='submit' value='New Event' />
          </div>
            {
              this.state.currentUser && this.state.childVisible ? <NewEvent /> : null
            }


      </div>
    )
  }



}
export default ShowHide
