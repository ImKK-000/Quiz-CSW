import React, {Component} from 'react';
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddUser extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname : '',
            lastname: '',
            age : ''
        }
    }

    addUser(){
        const ROOT_URL = 'http://localhost:8888/api/users';
        const user = this.state;
    
        axios.post( ROOT_URL, user)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        
        this.setState({
            firstname: '',
            lastname: '',
            age: ''
        });
    }

    render() {
        return (
                <div className="add-user">
                    <h1> Add User </h1>
                    <Form>
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
                        <Button onClick={()=> this.addUser()}>Submit</Button>
                    </Form>
                </div>
                )}
}

export default AddUser;