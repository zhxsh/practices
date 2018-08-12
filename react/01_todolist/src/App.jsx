import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: [
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.add = this.add.bind(this);
  }
  componentWillMount() {
    if(localStorage['todoList']){
      this.setState({
        list: JSON.parse(localStorage['todoList'])
      })
    }
    else {          // todoList为空时，初始化两个例子
      let l = [
        {
          name: '吃饭啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
          todoStatus: false
        },
        {
          name: '睡觉',
          todoStatus: true
        }
      ]
      localStorage.setItem('todoList',JSON.stringify(l));
    }
  }
  handleChange(e) {
    this.setState({value: e.target.value})
  }
  // 添加 todo
  add(event) {
    if(!this.state.value)  return;
    let list = this.state.list;
    list.unshift({
      name: this.state.value,
      todoStatus: true
    });
    this.setState({
      list: list,
      value: ''
    });
    localStorage.setItem('todoList',JSON.stringify(list));
    event.preventDefault();
  }
  // 完成 todo
  done(item,index,event) {
    console.log(this.state.list)
    if(item.todoStatus === false){
      console.log('已完成');
      return;
    }
    let list = this.state.list;
    list[index]['todoStatus'] = false;
    this.setState({
      list: list
    })
    localStorage.setItem('todoList',JSON.stringify(list))
  }
  render() {
    const listItems = this.state.list.map((item,index) => {
      return(<li key={index} className={item.todoStatus === false ? 'done': ''}>
        <i onClick={ (e)=> this.done(item,index,e)}></i>
        {item.name}
      </li>)
    })
    return (
      <form className="App" onSubmit={this.add}>
        <div>
          <input type="text" className="todoname" value={this.state.value} onChange={this.handleChange} />
          <span className="add" title="add todo" onClick={this.add}>+</span>
          <p className="tip">点击加号或者Enter添加</p>  
        </div>
        
        <ul className="list">
          {listItems}
        </ul>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </form>
    );
  }
}

export default App;
