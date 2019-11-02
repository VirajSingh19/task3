import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import { connect } from "react-redux";
import {Link, Redirect} from "react-router-dom";
import { ToastsContainer, ToastsStore } from "react-toasts";
import {Form} from 'react-bootstrap';
import Products from "../../data/data";
import {addItems} from "../../actions";
import './Form.css';
class UpdateForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            author:'',
            category:'',
            length:'',
            id:null,
            canClear:false,
            canSubmit:false,
            itemAdded:false
        }
    }
    
    componentDidMount() {
         const formType = this.props.location.state;
         
         if(formType === 'Add')
             return;  
        const {title,author,category,length,id} =  this.props.editItem;
        this.setState({title,author,category,length,id});
    }

  
    // to disable/enable clear values button
    clearValues() {
        const {title,author,category,length} = this.state;
        if(!title || !author || !category || !length) { // if something is empty
            this.setState({canSubmit:false});
        }
        if(!title && !author && !category && !length){ // if every thing is empty
            this.setState({canClear:false});
        }
        if(title && author && category && length){ // if every thing is filled
            this.setState({canSubmit:true});
        }
        if(title || author || category || length) { // if atleast on thing is filled
            this.setState({canClear:true});
        }
    }
    
    onTitle(title) {
        this.setState({title},()=>this.clearValues());
    }
    onAuthor(author) {
        this.setState({author},()=>this.clearValues());
    }
    onCategory(category) {
        this.setState({category},()=>this.clearValues());
    }
    onLength(length) {
        this.setState({length},()=>this.clearValues());
    }
	
	validateFields(){
		const {title,author,category,length,id} = this.state;
	    if(!title){
			ToastsStore.warning("Title cannot be empty!");
			return;
        }
        else if(!author){
			ToastsStore.warning("Select an Author!");
			return;
		}
        else if(!category){
			ToastsStore.warning("Enter the category!");
			return;
		}
		else if(!length){
			ToastsStore.warning("Enter the length!");   
			return;
		}
        ToastsStore.success(`Successfully ${this.props.location.state}ed`);   
        this.props.addItems( {title,author,category,length,id});
        
        setTimeout(()=>{
            this.setState({itemAdded: true});
        },2000); // waiting for 2 sec to render success notification  
	}
    
    onReset() {
        this.setState({title:''});
        this.setState({author:''});
        this.setState({category:''});
        this.setState({length:''});
        this.setState({canClear:false});
    }
    
   
    getUniqueAuthors() {
        const Authors = new Set();
        Products.forEach(product=>{
            Authors.add(product.author);
        });
        const authorsList =  Array.from(Authors);
        authorsList.unshift('');// default option
        return authorsList;
    }


    render() {
        const formType = this.props.location.state;
        return (
            <div className="pa4">
				<p className="f1">{formType}</p>
                <Form>
                    <Form.Group  controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                         value={this.state.title}
                         onChange={(event)=>this.onTitle(event.target.value)}
                         required type="text" placeholder="Title of the course" />
                    </Form.Group>
                      
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Author</Form.Label>
                        <Form.Control 
                        value={this.state.author}
                        onChange={(event)=>this.onAuthor(event.target.value)} required as="select">
                            {
                                this.getUniqueAuthors().map((author, index)=> {
                                    return <option key={index} > {author} </option>
                                })
                            }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Category</Form.Label>
                        <Form.Control 
                         value={this.state.category} onChange={(event)=>this.onCategory(event.target.value)}
                         required type="text" placeholder="Category of the course" />
                    </Form.Group>
                  
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Length</Form.Label>
                        <Form.Control required type="text" value={this.state.length} onChange={(event)=>this.onLength(event.target.value)}  placeholder="Length of the course" />
                    </Form.Group>
                                              
                    <Button className="mr2" onClick={()=>this.validateFields()} variant="primary">
                                     <i className="mr2 fa fa-paper-plane-o" aria-hidden="true" />
                                      Submit
                    </Button>

                    {
                    formType === 'Add' ?
                        <Button onClick={()=>this.onReset()} disabled={!this.state.canClear} className="mr2" variant="secondary" >
                            Clear Values
                        </Button>
                            :  ""
                    }

                    <Link to="/">
                        <Button  variant="secondary" >
                            Cancel
                        </Button>
                    </Link>
                    
            </Form>
            {
                this.state.itemAdded ?  
                <Redirect  to={{
                            pathname: '/',
                            state: 'Added'
                        }}
                    />
                :
                ""
            }

            <ToastsContainer store={ToastsStore} />
        </div>
        );
    }
}


function mapStateToProps({selected, list}) {
    const editId = selected[0]; 
    const item = list.find(i => i.id===editId);
    return {
        editItem: item
    } 
  }

export default connect(mapStateToProps,{addItems})(UpdateForm);