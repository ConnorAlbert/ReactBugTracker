import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListIssueComponent from './components/ListIssueComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateIssueComponent from './components/CreateIssueComponent';
import UpdateIssueComponent from './components/UpdateIssueComponent';
import ViewIssueComponent from './components/ViewIssueComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListIssueComponent}></Route>
                          <Route path = "/issues" component = {ListIssueComponent}></Route>
                          <Route path = "/add-issue/:id" component = {CreateIssueComponent}></Route>
                          <Route path = "/view-issue/:id" component = {ViewIssueComponent}></Route>
                          <Route path = "/update-issue/:id" component = {UpdateIssueComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;