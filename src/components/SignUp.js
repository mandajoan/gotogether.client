import React from 'react'
import auth from '../auth'
import {Redirect} from 'react-router-dom'

class SignUp extends React.Component {
  constructor(){
    super()
  this.state = {
    shouldRedirect: false,
    interests: []
  }

  onChange(e){
    const interests = this.state.interests
    let index

    if(e.target.checked){
      interests.push(+e.target.value)
    } else {
      index = interests.indexOf(+e.target.value)
      interests.splice(index, 1)
    }
    this.setState({interests: interests})
  }

  handleFormSubmit(evt) {
    evt.preventDefault()
    console.log(this.refs.interests)
    const formData = {
      name: this.refs.name.value,
      title: this.refs.title.value,
      email: this.refs.email.value,
      password: this.refs.password.value,
      interests: this.state.interests
      console.log(interests)
    }
    console.log("CREATING ACCOUNT...")
    console.log(formData)
    auth.signUp(formData).then(success => {
      if (success)
        this.setState({shouldRedirect: true})
    })
  }

  render() {
    return (this.state.shouldRedirect
      ? <Redirect to='/login'/>
      : (
        <div className="signup">
          <h1>Create An Account</h1>
          <form onSubmit={this.handleFormSubmit.bind(this)}>
            <input ref="name" type="text" placeholder="Name"/>
            <br/>
              <input ref="title" type="text" placeholder="Title/Occupation"/>
              <br/>
                <input ref="email" type="text" placeholder="Email"/>
                <br/>
                  <input ref="password" type="password" placeholder="Password"/>
                  <fieldset>
                    <legend>Choose your interests</legend>
                    <div className="container">
                      <div className="row">
                        <div className="col-sm-6">
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

                        <div className="col-sm-6">
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
                  <button>Create Account</button>
                </form>
              </div>
            )
          )
        }
      }

export default SignUp
