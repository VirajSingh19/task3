import React, {Component} from 'react';
import { connect } from "react-redux";
import {Link} from "react-router-dom";
import './Courses.css';
import {ButtonToolbar,Button} from 'react-bootstrap';
import {deleteItems} from "../../actions";


class Courses extends Component {
    render() {
        const {selected,deleteItems} = this.props;
        return (
            <div>
             <div className="f1 ml3">Courses</div>
        
                <ButtonToolbar className="buttons">
                        <Link to="/new">
                            <Button className="ml3 mr3" variant="primary">New
                            <i className="icons fa fa-plus" aria-hidden="true"/> 
                            </Button>
                        </Link>
                        <Button className="mr3" variant="warning">
                        Edit
                            <i className="icons fa fa-pencil" aria-hidden="true"/>
                        </Button>
                        <Button 
                        onClick={()=> deleteItems(selected) }
                        className="mr3"  
                        variant="danger">
                        Delete
                              <i className="icons fa fa-trash-o" aria-hidden="true"/> 
                        </Button>
                      
                </ButtonToolbar>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
      selected: state.selected
    };
  }
  
export default connect(mapStateToProps,{deleteItems}) (Courses);