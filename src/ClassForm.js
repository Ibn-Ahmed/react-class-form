import React, { Component } from 'react'
import './ClassForm.css'

 class Form extends Component {
    state = {
        userName : "",
        userEmail: "",
        userPassword : ""
    }
    onChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitForm = (e)=>{
        e.preventDefault();
        console.log({"username": this.state.userName,"email": this.state.userEmail,"password": this.state.userPassword})
    }
  render() {
    const {userName,userEmail,userPassword} = this.state
    return (
        <main>
        <div className="login">
        <div className="login__container">
            <h2>React Class Form</h2>
            <form onSubmit={this.submitForm}>
            <div className="name">
                    <label htmlFor="name">Name</label><br/>
                    <input type="name" value={userName} onChange={this.onChange}
                    name='userName'
                    />
                </div>
                <div className="email">
                    <label htmlFor="email">Email</label><br/>
                    <input type="email" value={userEmail} onChange={this.onChange}
                    name='userEmail'
                    />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label><br/>
                    <input type="password" value={userPassword} onChange={this.onChange}
                    name='userPassword'
                    />
                </div>
                <div>
                    <input type="submit" value='Send' className='submit' />
                </div>
            </form>
        </div>
    </div>
    <div>
        <h1>DETAILS</h1>
        <p>Username: {this.state.userName}</p><br />
        <p>Email: {this.state.userEmail}</p><br />
        <p>Password: {this.state.userPassword}</p>
    </div>
    </main>
    )
  }
}

export default Form