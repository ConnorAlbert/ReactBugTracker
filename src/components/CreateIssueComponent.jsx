import React, { Component } from "react";
import IssueService from "../services/IssueService";

class CreateIssueComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
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
    this.saveOrUpdateIssue = this.saveOrUpdateIssue.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      IssueService.getIssueById(this.state.id).then((res) => {
        let issue = res.data;
        this.setState({
          name: issue.name,
          priority: issue.priority,
          status: issue.status,
          description: issue.description,
        });
      });
    }
  }
  saveOrUpdateIssue = (e) => {
    e.preventDefault();
    let issue = {
      name: this.state.name,
      priority: this.state.priority,
      status: this.state.status,
      description: this.state.description,
    };
    console.log("issue => " + JSON.stringify(issue));

    // step 5
    if (this.state.id === "_add") {
      IssueService.createIssue(issue).then((res) => {
        this.props.history.push("/issues");
      });
    } else {
      IssueService.updateIssue(issue, this.state.id).then((res) => {
        this.props.history.push("/issues");
      });
    }
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
    this.props.history.push("/issues");
  }

  getTitle() {
    if (this.state.id === "_add") {
      return <h3 className="text-center">Add Issue</h3>;
    } else {
      return <h3 className="text-center">Update Issue</h3>;
    }
  }
  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Name: </label>
                    <input
                      autoComplete="off"
                      name="name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <div>
                      <label>
                        Priority:
                        <select
                          name="priority"
                          className="form-option"
                          value={this.state.priority}
                          onChange={this.changePriorityHandler}
                        >
                          <option value="" selected disabled hidden>Choose here</option>
                          <option value="Low">Low</option>
                          <option value="Medium">Medium</option>
                          <option value="High">High</option>
                          <option value="Critical">Critical</option>
                        </select>
                      </label>
                    </div>
                    <div className="form-group">
                      <div>
                        <label>
                          Status:
                          <select
                            name="Status"
                            className="form-option"
                            value={this.state.status}
                            onChange={this.changeStatusHandler}
                          >
                            <option value="" selected disabled hidden>Choose here</option>
                            <option value="Open">Open</option>
                            <option value="Closed">Closed</option>
                            <option value="Fixed">Fixed</option>
                          </select>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label> Description: </label>
                    <input
                      autoComplete="off"
                      name="description"
                      className="form-control"
                      value={this.state.description}
                      onChange={this.changeDescriptionHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.saveOrUpdateIssue}
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

export default CreateIssueComponent;
