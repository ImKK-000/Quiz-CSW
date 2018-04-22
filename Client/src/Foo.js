import React, { Component } from 'react';
class Foo extends Component {
    render() {
        return (  <h1>Foo <Bar name="John" /> </h1>
        );
    }
}


class Bar extends Component {
    render() {
        return ( <div>Bar {this.props.name} </div> )
    }
}

export default Foo;
