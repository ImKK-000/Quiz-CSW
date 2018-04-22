import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {fetchUsers} from '../actions'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class DelUser extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname : '',
            lastname: '',
            age : '',
            modalDel: this.props.del
        }
        this.toggleDel = this.toggleDel.bind(this);
    }

    toggleDel() {
        this.setState({
          modalDel: !this.state.modalDel
        });
     }
        
    DelUser(){
        // const ROOT_URL = 'http://localhost:8888/api/users';
        // const user = this.state;
    
        // axios.post( ROOT_URL, user)
        //   .then(res => {
        //     console.log(res);
        //     console.log(res.data);
        //   })
        
        // this.setState({
        //     firstname: '',
        //     lastname: '',
        //     age: ''
        // });

        // this.props.fetchUsers();
    }

    render() {
        return (
            // 
            <div>
                <Modal isOpen={this.state.modalDel} toggle={this.toggleDel} className={this.props.className}>
                    <div className="add-user">      
                        <h1> Del User </h1>
                        <Form onSubmit={()=> this.DelUser()}>
                            <FormGroup >
                                <Label  className="mr-sm-2">Firstname : </Label>
                                <Input
                                    type="text" name="firstname" placeholder="eg. Chakkrit" 
                                    value={this.state.firstname}
                                    onChange={(e)=>{this.setState({firstname: e.target.value})}}
                                />
            
                                <Label className="mr-sm-2">Lastname : </Label>
                                <Input
                                    type="text" name="lastname" placeholder="eg. C."
                                    value={this.state.lastname}
                                    onChange={(e)=>{this.setState({lastname: e.target.value})}}
                                />
                                <Label  className="mr-sm-2">Age : </Label>
                                <Input
                                    type="text" name="age" placeholder="eg. Rap-yo!" 
                                    value={this.state.age}
                                    onChange={(e)=>{this.setState({age: e.target.value})}}
                                />
                            </FormGroup>
                            <Button >Submit</Button>
                        </Form>
                    </div>
                </Modal>
            </div>
        );
    }
    componentDidUpdate(prevProps){
        if(prevProps.del !== this.props.del){
            this.setState({
                modalDel: !this.state.modalDel
            });
        }
    }
}

export default connect(null, {fetchUsers}) (DelUser);