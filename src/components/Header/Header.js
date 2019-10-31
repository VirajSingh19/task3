import React, {Component} from 'react';
import { connect } from "react-redux";
import './Header.css';
import {ButtonToolbar,Button} from 'react-bootstrap';
import {deleteItems} from "../../actions";

class Header extends Component {
    render() {
        const {selected,deleteItems} = this.props;
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
                        <Button 
                        onClick={()=>{ deleteItems(selected) }}
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
  
export default connect(mapStateToProps,{deleteItems}) (Header);