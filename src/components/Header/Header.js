import React, {Component} from 'react';
import './Header.css';
import {ButtonToolbar,Button} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div>
             <div className="f1">Courses</div>
        
                <ButtonToolbar className="buttons">
                        <Button className="mr3" variant="primary">New
                           <i className="icons fa fa-plus" aria-hidden="true"/> 
                        </Button>
                        <Button className="mr3" variant="warning">
                        Edit
                            <i className="icons fa fa-pencil" aria-hidden="true"/>
                        </Button>
                        <Button className="mr3" variant="danger">Delete
                              <i className="icons fa fa-trash-o" aria-hidden="true" onClick={this.handleDelete}/> 
                        </Button>
                      
                </ButtonToolbar>
            </div>
        );
    }
}

export default Header;