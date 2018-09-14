import React, {Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'


class Auth extends Component {
    constructor(){
        super()
        this.state={
            username:'',
            password: '',
            user:[]
        }
        this.register= this.register.bind(this)
    }

    handleUser(val){
        this.setState({
            username: val
        })
    }

    handlePass(val){
        this.setState({
            password: val
        })
    }

    register(){
        let {username, password} = this.state
        axios.post('/api/auth/register', {username, password}).then(res=>{
            this.setState({
                user:res.data
        })})        
    }

    login(){
        let{username, password}=this.state
        axios.post('/api/auth/login', {username, password}).then(res=>{
            this.setState({
                user: res.data
            })
        })
    }


    render(){
        console.log(this.props.location)
        console.log(this.state.user)
        // console.log('user', this.state.username, 'password', this.state.password)
        return(
            <div>
                <h1>HELO</h1>
                <label htmlFor="">Username: </label>
                <input value={this.state.username} type="text" onChange={(e)=>{this.handleUser(e.target.value)}}/> <br/>
                <label htmlFor="">Password: </label>
                <input value={this.state.password} type="text" onChange={(e)=>{this.handlePass(e.target.value)}}/> <br/>
                <Link to='/dashboard'><button>Login</button></Link>
                <Link to='/dashboard'><button onClick={this.register}>Register</button></Link>
            </div>
        )
    }
}

export default Auth