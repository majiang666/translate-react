import React,{ Component } from 'react'

class TransForm extends Component{
    render(){
        return (
            <div className="form">
                
                <input type="text" placeholder="请输入关键词" onChange={this.props.getInputVal} />
                <select onChange={this.props.getSelectVal}>
                    <option value="en">English</option>
                    <option value="zh">中文</option>
                </select>
                <input type="button" defaultValue="翻译" onClick={this.props.btnClick} />
            </div>
        )
    }
};

export default TransForm;