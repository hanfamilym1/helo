import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav(props) {
    console.log(props.href)
    let {href} = props
    if (href === 'http://localhost:3001/#/'){
        return null
        
    } else {
        return (
            <div>
                <Link to='/dashboard'><button>Home</button></Link>
                <Link to='/new'><button>New Post</button></Link>
                <Link to='/'><button>Logout</button></Link>
                
                </div>
        )
    }
    
}