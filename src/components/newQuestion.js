import React from 'react'
import Navbar from './navbar'
import {connect} from 'react-redux'
import {handleAddQuestions} from '../actions/questions'

class NewQuestion extends React.Component{
    state={
        opt1: '',
        opt2:''
    }

    handleOnChangeOne = (txt1) => {
        this.setState(() => ({
            opt1: txt1,
        }))
    }
    handleOnChangeTwo = (txt2) => {
        this.setState(() => ({
            opt2: txt2
        }))
    }

    handleOnSubmite = e => {
        e.preventDefault() 
        console.log(this.props.authedUser)
        this.props.dispatch(handleAddQuestions({optionOneText:this.state.opt1, optionTwoText:this.state.opt2, author:this.props.authedUser}));
        this.setState(() => ({
            opt1: '',
            opt2: ''
        }))
        this.props.history.push("/");
    }
    render(){
        return(
            <div>
                <Navbar page="new" authedUser={this.props.authedUser}/>
                <form onSubmit ={this.handleOnSubmite} className="new-ques">
                    <h2 className="head-new">Would you Rather...</h2>
                    <input type="text" placeholder="Put option one" value={this.state.opt1} onChange={(e) => this.handleOnChangeOne(e.target.value)}/>
                    <input type="text" placeholder="Put option two"value={this.state.opt2} onChange={(e) => this.handleOnChangeTwo(e.target.value)}/>
                    <button 
                    type="submit" 
                    disabled={((this.state.opt1==='') || (this.state.opt2===''))} 
                    className={((this.state.opt1==='') || (this.state.opt2===''))===false?"hover-prop":undefined
                    }
                    >Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({authedUser}) => ({
    authedUser,
})


export default connect(mapStateToProps)(NewQuestion)