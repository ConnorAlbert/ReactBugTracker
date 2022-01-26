import React, { Component } from "react";
import IssueService from "../services/IssueService";

class UpdateIssueComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      name: "",
      priority: "",
      status: "",
      description: "",
    };
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changePriorityHandler = this.changePriorityHandler.bind(this);
    this.changeStatusHandler = this.changeStatusHandler.bind(this);
    this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
    this.updateIssue = this.updateIssue.bind(this);
  }

  componentDidMount() {
    IssueService.getIssueById(this.state.id).then((res) => {
      let issue = res.data;
      this.setState({
        name: issue.name,
        priority: issue.priority,
        status: issue.status,
        description: issue.description
      });
    });
  }

  updateIssue = (e) => {
    e.preventDefault();
    let issue = {
      name: this.state.name,
      priority: this.state.priority,
      status: this.state.status,
      description: this.state.description
    };
    console.log("issue => " + JSON.stringify(issue));
    console.log("id => " + JSON.stringify(this.state.id));
    IssueService.updateIssue(issue, this.state.id).then((res) => {
      this.props.history.push("/issues");
    });
  };

  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changePriorityHandler = (event) => {
    this.setState({ priority: event.target.value });
  };

  changeStatusHandler = (event) => {
    this.setState({ status: event.target.value });
  };

  changeDescriptionHandler = (event) => {
    this.setState({ description: event.target.value });
  };

  cancel() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Issue</h3>
              <div className="card-body">
                <form>
                <div className="form-group">
                    <label> Name: </label>
                    <input
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Priority: </label>
                    <input
                      name="priority"
                      className="form-control"
                      value={this.state.priority}
                      onChange={this.changePriorityHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Status: </label>
                    <input
                      name="status"
                      className="form-control"
                      value={this.state.status}
                      onChange={this.changeStatusHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Description: </label>
                    <input
                      name="description"
                      className="form-control"
                      value={this.state.description}
                      onChange={this.changeDescriptionHandler}
                    />
                  </div>
                  

                  <button
                    className="btn btn-success"
                    onClick={this.updateIssue}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateIssueComponent;
