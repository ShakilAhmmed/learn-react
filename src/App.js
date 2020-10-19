import { render } from "@testing-library/react";
import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import NavBar from "./components/NavBar";
import Product from "./components/Product";
import SingleTask from "./components/SingleTask";
import { Save } from 'react-feather';
import axios from "axios";
class App extends Component {
  state = {
    users: [],
    task:'',
    taskList:[
      {
        id:1,
        task_name:"Task One",
        description:"Hello",
        status:1
      },
      {
        id:2,
        task_name:"Task Two",
        description:"Hello",
        status:0
      },
      {
        id:3,
        task_name:"Task Three",
        description:"Hello",
        status:1
      },
      {
        id:4,
        task_name:"Task Four",
        description:"Hello",
        status:1
      },
      {
        id:5,
        task_name:"Task Five",
        description:"Hello",
        status:0
      }
    ],
  }
  componentDidMount() {
    //let url =  this.props.search.length !== 0 ? `https://api.github.com/search/users?q=${this.props.search}` :  "https://api.github.com/users";
    let url = "https://api.github.com/users";
    axios
      .get(url)
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  searchUser = (search) => {
    if(search.length > 0) {
    let url =  `https://api.github.com/search/users?q=${search}&client_id=d067a39575a99f77b874&client_secret=d788e9d7e71cfa3929657dde48f898dbf2ea7f8a`;
        axios
          .get(url)
          .then((response) => {
            this.setState({ users: response.data.items });
          })
          .catch((error) => {
            console.log(error);
          });
    }
    
  }
  handleNewTask = ()=>{
    if(this.state.task.length === 0) {
      alert("Task Is Empty")
    }else {
      let taskList = [...this.state.taskList];
      let lastId = [...this.state.taskList].reverse()[0].id + 1;
      taskList.push({
        id:lastId,
        task_name:this.state.task,
        description:this.state.task,
        status:0
      })
      this.setState({ task: ''});
      this.setState({taskList});
     
    }
  }
  handleDelete = taskId => {
    if(window.confirm("Are You Sure?")){
      const taskList = this.state.taskList.filter(task => task.id !== taskId);
      this.setState({taskList});
    }
  }
  handleStatus = task => {
    const taskList = [...this.state.taskList]
    const index = taskList.indexOf(task)
    taskList[index].status = taskList[index].status === 0 ? 1 : 0;
    this.setState({taskList});
  }
  render() {
    return (
      <div className="container">
        <Jumbotron></Jumbotron>
        <NavBar searchUser={this.searchUser}></NavBar>
        {/* <div className="container">
          <Product users={this.state.users}></Product>
        </div> */}
        <hr></hr>
        <hr></hr>
        <div className="row">
          <div className="col-md-4">
            <input  onKeyUp={(event)=>this.setState({task:event.target.value})} className="form-control" type="text"/>
          </div>
          <div className="col-md-4">
            <button onClick={this.handleNewTask} className="btn btn-success"><Save size={15}/></button>
          </div>
        </div>
        <hr></hr>
        <hr></hr>
        <div className="container">
          {this.state.taskList.map(task=>{
            return <SingleTask onDelete={this.handleDelete} onStatus={this.handleStatus} key={task.id} task={task}></SingleTask>
          })}
        </div>
        
      </div>
    );
  }
}

export default App;
