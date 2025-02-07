// Code DigitalClicker Component Here
import React, {Component} from 'react'

export default class DigitalClicker extends Component{

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    clickHandler = e => {
        this.setState(prevState => {
            return {
                timesClicked: prevState.timesClicked + 1
            }
        })
    }

    render(){
        return ( 
            <div>
                <button onClick={this.clickHandler} >{this.state.timesClicked}</button>
            </div>
        )
    }
}

