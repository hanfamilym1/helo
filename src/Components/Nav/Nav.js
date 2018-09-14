import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

function Nav(props) {
    // console.log('props', this.props)
    let {href} = props
    if (href === 'http://localhost:3000/#/'){
        return null
        
    } else {
        return (
            <div>
                <Link to='/dashboard'><button>Home</button></Link>
                <Link to='/new'><button>New Post</button></Link>
                <Link to='/'><button>Logout</button></Link>
                {}
                </div>
        )
    }
    
}

function mapStateToProps(state){
    let { username, password} = state
    return(
        username,
        password
    )
}

export default connect(mapStateToProps)(Nav)