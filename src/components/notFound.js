import React from 'react'
import Navbar from './navbar'


const NotFound = (props) => {
    return(
        <div>
            <Navbar />
            <div className="err-pg">
                <h1>404, Page Not Found!!</h1>
            </div>
        </div>
    )
}

export default NotFound