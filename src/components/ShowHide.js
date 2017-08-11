import React from 'react'
import NewEvent from './NewEvent'


class ShowHide extends React.Component {
  constructor(){
    super()
    this.state = {
      childVisible: false

    }
  }


  onClick(){
      if(this.state.currentUser !== null){
        this.setState({childVisible: !this.state.childVisible})
        document.getElementById('newEvent').style.display = "none";
      
      }

    }

  render(){

    return(
      <div>

          <div onClick={() => this.onClick()}>
            <input id="newEvent" type='submit' value='New Event' />
          </div>
            {
              this.props.currentUser && this.state.childVisible ?
              <NewEvent /> : null
            }


      </div>
    )
  }



}
export default ShowHide
