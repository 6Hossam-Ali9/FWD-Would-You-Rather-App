import './App.css';
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading'
import {handleIntialData} from './actions/shared'
import React from 'react'
import Home from './components/index'
import NewQuestion from './components/newQuestion'
import Login from './components/login'
import LeaderBoard from './components/leaderBoard'
import QuestionDetails from './components/questionDetails'
import SubmitAnswer from './components/submitAnswer'
import NotFound from './components/notFound'
import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/protectedRoute'





class App extends React.Component{

  componentDidMount(){
    this.props.dispatch(handleIntialData())
  }

  render(){
    return(
      <div>
        <LoadingBar />
        <Switch>
          <Route exact path='/login' name = 'login' component = {Login}/>
          <ProtectedRoute exact path='/' name = 'home' component = {Home}/>
          <ProtectedRoute exact path='/leaderboard' name = 'Leader Board' component = {LeaderBoard}/>
          <ProtectedRoute exact path='/add' name = 'New Question' component = {NewQuestion}/>
          <ProtectedRoute exact path='/questions/:qid' name = 'New Question' component = {QuestionDetails}/>
          <ProtectedRoute exact path='/answers/:qid' name = 'Submit Answer' component = {SubmitAnswer}/>
          <Route  component = {NotFound}/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({authedUser}) => {
  return{
    authedUser
  }
}

export default connect(mapStateToProps)(App);
