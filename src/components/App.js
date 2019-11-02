import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Courses from '../components/Courses/Courses';
import List from './List/List'; 
import Header from "../components/Header/Header";
import Form from "../components/AddEditForm/AddEdit";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                <Header className="header"/>
                    <Switch>
                        <Route path="/" exact component={home} />                
                        <Route path="/new" component={Form} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

const home = () => {
    return (
        <div>
                <Courses className="courses"/>
                <List className="list" />
        </div>
    );
}


export default App;