import React, {Component} from 'react';
import { connect } from "react-redux";
import { Redirect} from "react-router-dom";
import './Courses.css';
import {ButtonToolbar,Button} from 'react-bootstrap';
import {deleteItems, clear} from "../../actions";
import { ToastsContainer, ToastsStore } from "react-toasts";


class Courses extends Component {    

    constructor(props) {
        super(props);
        this.state = {
            redirectTo: ''
        }
    }


    onNew() {
        this.setState({redirectTo:'new'});
    }


    onEdit() {
        const {selected} = this.props;
        if(selected.length > 1) {
            ToastsStore.warning("Multiple Items cannot be edited!");   
            return;
        }else if( !selected.length ) {
            ToastsStore.warning("Select an item to edit");   
            return;
        }
        this.setState({redirectTo:'edit'});
    }


    onDelete() {
        const {selected} = this.props;
        if( !selected.length ) {
            ToastsStore.warning("Select one or multiple items to be deleted!");   
            return;
        }
        this.props.deleteItems(selected)
        ToastsStore.info("Deleted");   
    }

    componentDidMount() {
        const {type,message} = this.props.notification;
        this.props.clear();
        if(message) {
            switch (type) {
                case "SUCESS":
                    ToastsStore.success(message);              
                    break;
                case "ERROR":
                    ToastsStore.error(message);              
                    break;       
                default:
                    break;
            }

        }
    }


    render() {
        return (
            <div>
             <div className="f1 ml3">Courses</div>
        
                <ButtonToolbar className="buttons">
                        
                        <Button onClick={()=>this.onNew()} className="ml3 mr3" variant="primary">New
                            <i className="icons fa fa-plus" aria-hidden="true"/> 
                        </Button>
                        
                        <Button
                        onClick ={()=> this.onEdit()}
                        className="mr3" variant="warning">
                        Edit
                            <i className="icons fa fa-pencil" aria-hidden="true"/>
                        </Button>
                        <Button 
                        onClick={()=> this.onDelete()}
                        className="mr3"  
                        variant="danger">
                        Delete
                              <i className="icons fa fa-trash-o" aria-hidden="true"/> 
                        </Button>
                </ButtonToolbar>
            <ToastsContainer store={ToastsStore} />
            {
                this.state.redirectTo === 'edit' ? 
                <Redirect  to={{
                        pathname: '/edit',
                        state: 'Edit'
                    }}
                />
                :
                    this.state.redirectTo === 'new' ? 
                    <Redirect  to={{
                            pathname: '/new',
                            state: 'Add'
                        }}
                    />
                    :
                    ""
            }

            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
      selected: state.selected,
      notification: state.notification
    };
  }
  
export default connect(mapStateToProps,{deleteItems, clear}) (Courses);