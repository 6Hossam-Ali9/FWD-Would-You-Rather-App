import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux'


const ProtectedRoute = ({component: Component, exact, path, authedUser}) => {
    return (
        <Route 
        exact= {exact}
        path = {path}
        render = {(props) => (
            authedUser?(<Component {...props} />)
            : <Redirect to={{
                pathname: "/login",
                state: {
                    path,
                }
            }} />
        )}
        />
    )
}

const mapStateToProps = ({authedUser}) => ({
    authedUser,
})

export default connect(mapStateToProps)(ProtectedRoute)