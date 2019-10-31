import React, {Component} from 'react';
import Courses from '../components/Courses/Courses';
import List from './List/List'; 
import Header from "../components/Header/Header";
import Form from "../components/AddEditForm/AddEdit";
import './App.css';
class App extends Component {
    render() {
        return (
            <div className="app">
             {/* <Header className="header"/>
             <Courses className="courses"/>
             <List className="list" /> */}

             <Form/>
             </div>
        );
    }
}

export default App;