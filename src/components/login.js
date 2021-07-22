import React from 'react'
import {connect} from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'


class Login extends React.Component{
    render(){
        console.log(this.props.authedUser) 
        return(
            <div className="center login-window">
                <div className="contained">
                    <h1>Welcome To Would You Rather!</h1>
                    <h3>Please, Login to continue</h3>
                    <select 
                    name="selectList" 
                    id="selectList" 
                    className="select"
                    defaultValue="Choose your user"
                    onChange={(e) => {
                        this.props.dispatch(setAuthedUser(e.target.value))
                        this.props.history.push('/')
                        }
                    }
                    >
                        <option value="Choose your user" disabled>Choose your user</option>
                       {Object.keys(this.props.users).map((key) => {
                            const user = this.props.users[key]
                            return(
                            <option value={user.id} key={user.id}>
                                {user.name}
                            </option>
                            )
                        })}
                    </select>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({authedUser, users}) => (
    {
        authedUser,
        users
    }
)

export default connect(mapStateToProps)(Login)