import React, { Component } from 'react'
import IssueService from '../services/IssueService'

class ViewIssueComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            issue: {}
        }
    }

    componentDidMount(){
        IssueService.getIssueById(this.state.id).then( res => {
            this.setState({issue: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Issue Details</h3>
                    <div className = "card-body">
                        <div className = "rows">
                            <label> Name: </label>
                            <div className='data'> { this.state.issue.name }</div>
                        </div>
                        <div className = "rows">
                            <label> Priority: </label>
                            <div className='data'> { this.state.issue.priority }</div>
                        </div>
                        <div className = "rows">
                            <label> Status: </label>
                            <div className='data'> { this.state.issue.status }</div>
                        </div>
                        <div className = "rows">
                            <label> Description: </label>
                            <div className='data'> { this.state.issue.description }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewIssueComponent