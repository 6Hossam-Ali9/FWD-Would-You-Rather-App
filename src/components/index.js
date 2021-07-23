import React from 'react'
import Navbar from './navbar'
import {connect} from 'react-redux'
import Answerd from './answerd'
import NotAnswerd from './notAnswerd'


class Home extends React.Component{
    state={
        page: 'notAnswerd'
    }
    handleOnClick = (option) => {
        this.setState(() => ({
            page: option
        }))
    }
    render(){
        const {questions, authedUser, users} = this.props
        return(
            <div>
                <Navbar page="home"/>
                <div className="sec-nav">
                    <ul className="switch-page">
                        <li key="not-answerd" onClick={() => this.handleOnClick('notAnswerd')} className={this.state.page==='notAnswerd'?("active"):undefined}>Not Answerd</li>
                        <li key="answerd" onClick={() => this.handleOnClick('answerd')} className={this.state.page==='answerd'?("active"):undefined}>Answerd</li>
                    </ul>
                </div>
                <div className="dashboard-content">
                    {this.state.page==='answerd' &&(<Answerd questions={questions} authedUser={authedUser} users = {users}/>)}
                    {this.state.page==='notAnswerd' &&(<NotAnswerd questions={questions} authedUser={authedUser} users = {users}/>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({authedUser, questions, users}) => ({
    authedUser,
    questions,
    users
})

export default connect(mapStateToProps)(Home)