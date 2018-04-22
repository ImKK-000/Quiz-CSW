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
        const ROOT_URL = 'http://localhost:8888/api/bears';
        // const user = {
        //   name: this.state.name,
        //   weight: this.state.weight
        // };
    
        axios.post( ROOT_URL, this.state)
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
                <div>
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label  className="mr-sm-2">firstname : </Label>
                        <Input
                            type="text" name="firstname" placeholder="eg. Rap-yo!" 
                            value={this.state.firstname}
                            onChange={(e)=>{this.setState({firstname: e.target.value})}}
                        />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label className="mr-sm-2">lastname : </Label>
                        <Input
                            type="text" name="lastname" placeholder="eg. 40"
                            value={this.state.lastname}
                            onChange={(e)=>{this.setState({lastname: e.target.value})}}
                        />
                        </FormGroup>
                        <Button onClick={()=> this.addUser()}>Submit</Button>
                    </Form>
                </div>
                )}
}

export default AddUser;