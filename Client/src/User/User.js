//https://gist.github.com/wwarodom/f27e0903ed3a12cd2360dea88d53c295

// Edit by : Him-2C

import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Container, Row, Col } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Button } from 'reactstrap';    

import {fetchUsers} from '../actions'
import AddUser from './AddUser';
import DelUser from './DelUser';
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
          add: false,
          del: false
        };
        
        // this.toggle = this.toggle.bind(this);
    }
    
    componentDidMount() {
        this.props.fetchUsers()
    }

    renderUsers() {
        if ( Object.keys(this.props.users).length !== 0 )
            return (
                this.props.users.map((user,index) =>(
                    <Col xs="4" sm="3" key={index} className="card-user"> 
                        <Card>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardTitle> {user.firstname} {user.lastname[0]}.</CardTitle>
                                <CardSubtitle>{user.lastname}</CardSubtitle>
                                <CardText>{user.age}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                ))
            )
        }

    render() {
        return (
            <div className="content-user">
                <div className="head-user">                
                    <h1>USERS</h1>
                    <Button color="danger" onClick={()=>{this.setState({add: !this.state.add})}}> Add User</Button>
                    <Button color="danger" onClick={()=>{this.setState({del: !this.state.del})}}> Del User</Button>
                </div>
                <Container >
                    <Row>
                        {this.renderUsers()}    
                    </Row>
                </Container>
                <AddUser add={this.state.add}/>
                <DelUser del={this.state.del}/>
            </div>
        )}
}

function mapStateToProps( state ) {
    return {users: state.users }
}


export default connect(mapStateToProps, {fetchUsers})(User)