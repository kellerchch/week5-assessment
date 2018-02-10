import React, { Component } from 'react';
import './App.css';
import toDo from './toDo';
import toDoList from './toDoEditor';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toDos: '',
      toDoToAdd: new Asset(null, '', 0, ''),
      selectedtoDo: {
        name: '',
      }
    }
  }

  selecttoDo(todo) {
    this.setState({ selectedtoDo: toDo });
  
  }

  toDoEdit (e)  {
    this.setState({
      toDos: e.target.value
    })
  }


  submitToDo () {
    let copy = this.state.toDos.slice()
    copy.push(this.state.toDoToAdd)
    this.setState({ toDos: copy });
}

  handleSubmit(e) {
    let copy = this.state.toDoToAdd;
    copy[e.target.name] = e.target.value;
    copy.id = this.state.toDos.length;
    this.setState({ toDoToAdd: copy });
  }

  submittoDo = (e) => {
    this.setState({
      jokeName: e.target.value
    })
  }

  submittoDoRequest = () => {
    axios.get(`http://localhost:3000/toDo`).then((response) => {
      this.setState({
        toDo: response.toDo
      })

    })
  }

  submittoDo = () => {
    var toDo = {
      toDo: this.state.toDo
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">To Do List</h1>
        </header>
          <div className="App-intro">

{/* take new input */}
              <form className="form" onSubmit={this.newToDo}>
              <div className="todo-input">
                <label>
                  To Do Input:
                  <input
                    name="name"
                    type="text"
                    value={this.state.toDos.name}
                    onChange={this.newToDo} 
                    />
                  <button className="button" onClick={this.submittoDo}>submit</button>
                </label>
              </div>

{/* display todo list */}
              <div className="todo-output">
                the running list
                  <label>
                  <input type="checkbox" />
                  </label>
                    <AssetList assets={this.state.toDos} selectAsset={ this.selecttoDo } />
                    <AssetEditor selected={this.state.selectedtoDo} 
                    refreshList={ this.refresh } />

                  <button className="button" onClick={this.toDoEdit }>edit</button>
              </div>
              </form>
          </div>
       </div>
    );
  }
}

export default App;
