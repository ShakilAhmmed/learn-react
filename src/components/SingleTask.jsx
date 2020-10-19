import React, { Component } from 'react'
import { Trash , CheckCircle,PlayCircle } from 'react-feather';
import '../App.css'
class SingleTask extends Component {
    render () {
        return (
            <div className="col-sm-3">
                <div className="panel panel-primary">
                <div className="panel-heading" style={{ textAlign:"center" }} >{this.props.task.task_name}</div>
                <div className="panel-body">
                    <h1>{this.props.task.description}</h1>
                    <span className={this.statusStyle()}>{this.props.task.status !== 0 ? "Active": "Inactive"}</span>
                </div>
                <div className="panel-footer">
                    <button onClick={()=>this.props.onDelete(this.props.task.id)} className="btn btn-danger"><Trash color="white" size={15}/></button>
                    &nbsp;
                    {this.props.task.status === 0 ? 
                        (<button className="btn btn-success" onClick={()=>this.props.onStatus(this.props.task)}><CheckCircle color="white" size={15}/></button>) : 
                        (<button className="btn btn-warning" onClick={()=>this.props.onStatus(this.props.task)}><PlayCircle color="white" size={15}/></button>)
                    }
                </div>
                </div>
            </div>
        );
    }
    statusStyle() {
        let classes = "badge badge-"
        classes += this.props.task.status !== 0 ? "success": "danger";
        return classes;
    }
}
export default SingleTask;