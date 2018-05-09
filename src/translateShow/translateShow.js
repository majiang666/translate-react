import React,{ Component } from 'react'

class TranslateShow extends Component{
    render(){
        return (
            <div className="show">
                <h2>{this.props.children}</h2>
            </div>
        )
    }
}

export default TranslateShow