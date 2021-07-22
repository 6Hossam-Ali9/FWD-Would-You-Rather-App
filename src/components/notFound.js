import React from 'react'
import {Link} from 'react-router-dom'
class NotFound extends React.Component{
    
    render(){
        return(
            <div>
                <h1>404, Page Not Found!!</h1>
                <h1><Link to="/login">Go To Login Page!</Link></h1>
            </div>
        )
    }
}

export default NotFound