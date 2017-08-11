import React from 'react'
import auth from '../auth'
import {Redirect} from 'react-router-dom'

class NewEvent extends React.Component {
  constructor(){
    super()
      this.state = {
        shouldRedirect: false,
        category: []
      }
    }
      onChange(e){
        const category = this.state.category
        let index
        if(e.target.checked){
          category.push(e.target.value)
        } else {
          index = category.indexOf(e.target.value)
          category.splice(index, 1)
        }
        this.setState({category: category})
      }



    handleFormSubmit(evt){
      evt.preventDefault()
      const formData = {
        title: this.refs.title.value,
        description: this.refs.description.value,
        location: this.refs.location.value,
        category:this.state.category,
        date: this.refs.date.value
      }
      console.log(formData)
      auth.newEvent(formData).then((data) => {
        if(data.success)
          this.setState({shouldRedirect: true})
          document.getElementById('newEvent').style.display = "inline";

      })
    }
      render(){
        return(this.state.shouldRedirect ?
        <Redirect to= '/'/> : (
          <div className="newEvent">
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <legend>Event Information</legend>
            <div id="upperForm">
            <input ref='title' type='text' placeholder='Event Title' />
            <input ref='description' type='text' placeholder='Description' />
            <input ref='location' type='text' placeholder='City, State' />
            <input ref='date' type='date'  />
            </div>
            <fieldset>
            <legend>Choose Category</legend>
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <div>
                    <input type="checkbox" value="vr" onChange={this.onChange.bind(this)}/>
                    <label htmlFor="vr">Virtual Reality</label>
                  </div>
                  <div>
                    <input type="checkbox" value="ar" onChange={this.onChange.bind(this)} />
                    <label htmlFor="ar">Augmented Reality</label>
                  </div>
                  <div>
                    <input type="checkbox" value="ai" onChange={this.onChange.bind(this)} />
                    <label htmlFor="ai">Artificial Intelligence</label>
                  </div>
                  <div>
                    <input type="checkbox" value="mr" onChange={this.onChange.bind(this)} />
                    <label htmlFor="mr">Mixed Reality</label>
                  </div>
                  <div>
                    <input type="checkbox" value="cs" onChange={this.onChange.bind(this)} />
                    <label htmlFor="cs">Computer Science</label>
                  </div>
                  <div>
                    <input type="checkbox"  value="it" onChange={this.onChange.bind(this)} />
                    <label htmlFor="it">Information Technology</label>
                  </div>
                  <div>
                    <input type="checkbox"  value="programming" onChange={this.onChange.bind(this)} />
                    <label htmlFor="programming">Programming</label>
                  </div>
                  <div>
                    <input type="checkbox"  value="dataScience" onChange={this.onChange.bind(this)} />
                    <label htmlFor="dataScience">Data Science</label>
                  </div>
                  <div>
                    <input type="checkbox"  value="machineLearning" onChange={this.onChange.bind(this)} />
                    <label htmlFor="machineLearning">Machine Learning</label>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div>
                    <input type="checkbox" value="gameDev" onChange={this.onChange.bind(this)} />
                    <label htmlFor="gameDev">Game Development</label>
                  </div>
                  <div>
                    <input type="checkbox" value="esports" onChange={this.onChange.bind(this)} />
                    <label htmlFor="esports">Esports</label>
                  </div>
                  <div>
                    <input type="checkbox" value="webDev" onChange={this.onChange.bind(this)} />
                    <label htmlFor="webDev">Web Development</label>
                  </div>
                  <div>
                    <input type="checkbox" value="security" onChange={this.onChange.bind(this)} />
                    <label htmlFor="security">Cyber Security</label>
                  </div>
                  <div>
                    <input type="checkbox" value="networkEngineering" onChange={this.onChange.bind(this)} />
                    <label htmlFor="networkEngineering">Network Engineering</label>
                  </div>
                  <div>
                    <input type="checkbox" value="digitalMarketing" onChange={this.onChange.bind(this)} />
                    <label htmlFor="digitalMarketing">Digital Marketing</label>
                  </div>
                  <div>
                    <input type="checkbox" value="threeSixtyVideo" onChange={this.onChange.bind(this)} />
                    <label htmlFor="threeSixtyVideo">360 Video</label>
                  </div>
                  <div>
                    <input type="checkbox" value="digitalEntertainment" onChange={this.onChange.bind(this)} />
                    <label htmlFor="digitalEntertainment">Digital Entertainment</label>
                  </div>
                  <div>
                    <input type="checkbox" value="socialMedia" onChange={this.onChange.bind(this)} />
                    <label htmlFor="socialMedia">Social Media</label>
                  </div>
                  <div>
                    <input type="checkbox" value="startups" onChange={this.onChange.bind(this)} />
                    <label htmlFor="startups">Startups</label>
                  </div>
                  <div>
                    <input type="checkbox" value="androidDev" onChange={this.onChange.bind(this)} />
                    <label htmlFor="androidDev">Android Development</label>
                  </div>
                  <div>
                    <input type="checkbox" value="iosDev" onChange={this.onChange.bind(this)} />
                    <label htmlFor="iosDev">IOS Development</label>
                  </div>
                </div>
              </div>
            </div>

              </fieldset>
            <button>Submit</button>
          </form>
        </div>
        )
      )
    }
  }



export default NewEvent
