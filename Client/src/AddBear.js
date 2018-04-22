import React, {Component} from 'react';
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddBear extends Component {
    constructor(props){
        super(props);
        this.state={
            name : '',
            weight : ''
        }
    }

    addBear(){
        const ROOT_URL = 'http://localhost:8888/api/bears';
        const user = {
          name: this.state.name,
          weight: this.state.weight
        };
    
        axios.post( ROOT_URL, user)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
        
        this.setState({
            name: '',
            weight: ''
        });
    }

    render() {
        return (
                <div>
                    <Form inline>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label  className="mr-sm-2">Name : </Label>
                        <Input
                            type="text" name="name" placeholder="eg. Rap-yo!" 
                            value={this.state.name}
                            onChange={(e)=>{this.setState({name: e.target.value})}}
                        />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="weight" className="mr-sm-2">weight : </Label>
                        <Input
                            type="text" name="weight" placeholder="eg. 40"
                            value={this.state.weight}
                            onChange={(e)=>{this.setState({weight: e.target.value})}}
                        />
                        </FormGroup>
                        <Button onClick={()=> this.addBear()}>Submit</Button>
                    </Form>
                </div>
                )}
}

export default AddBear;