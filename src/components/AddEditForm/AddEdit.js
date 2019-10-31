import React, {Component} from 'react';
import {ButtonToolbar,Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import Products from "../../data/data";
import './Form.css';

class UpdateForm extends Component {

    getUniqueAuthors() {
        const Authors = new Set();
        Products.forEach(product=>{
            Authors.add(product.author);
        });
        return Array.from(Authors);
    }

    render() {
        return (
            <div className="pa4">
                <Form>

                    <Form.Group  controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control required type="text" placeholder="Title of the course" />
                    </Form.Group>
                   
                    
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Example select</Form.Label>
                        <Form.Control required as="select">
                            {
                                this.getUniqueAuthors().map((author)=> {
                                    return <option> {author} </option>
                                })
                            }
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Category</Form.Label>
                        <Form.Control required type="text" placeholder="Category of the course" />
                    </Form.Group>
                  
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Length</Form.Label>
                        <Form.Control required type="text" placeholder="Length of the course" />
                    </Form.Group>
                            

                    <Button type="submit"  variant="primary">
                           <i className="mr2 fa fa-paper-plane-o" aria-hidden="true" />
                           Submit
                    </Button>
                    
                    <Button disabled className="ml2 mr2" variant="secondary" >
                           Clear Values
                    </Button>

                    <Button  variant="secondary" >
                           Cancel
                    </Button>

            </Form>
        </div>
        );
    }
}

export default UpdateForm;