import React, { Component } from 'react';
import './App.css';
import TransForm from './translateForm/translateForm'
import TransShow from './translateShow/translateShow'
import axios from 'axios';
class App extends Component {
  constructor(props){
      super(props)
      this.state = {
          defaultVal:'',
          selectVal:'',
          ress:''
      }
  }
  getInputVal = (val) => {
    this.setState({
      defaultVal:val.target.value
    })
  }
  getSelectVal = (val) => {
    this.setState({
      selectVal:val.target.value
    })
  }
  btnClick = () => {
    if(this.state.defaultVal === ''){
      alert('请输入关键词');
      return;
    }else{
      axios.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180507T013532Z.416c3dd9adf82183.f65cff23c4628135afe0b21ca33cf8497bf069ae&lang='+this.state.selectVal+'&text='+this.state.defaultVal)
      .then((res) => {
        console.log(res)
        this.setState({
          ress:res.data.text[0]
        })
      }).catch((err) => {
          console.log(err);
      })
    }
  }
  componentDidMount(){
    this.setState({
      selectVal:'en'
    })
  }
  render() {
    return (
      <div className="App">
        <h1>翻译</h1>
        <h5>简单 / 便捷 / 小巧</h5> 
        <TransForm 
        getInputVal={this.getInputVal} 
        getSelectVal={this.getSelectVal} 
        btnClick={this.btnClick.bind(this)}></TransForm>
        <TransShow>{this.state.ress}</TransShow>
      </div>
    );
  }
}

export default App; 
