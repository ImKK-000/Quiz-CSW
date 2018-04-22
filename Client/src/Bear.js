//https://gist.github.com/wwarodom/f27e0903ed3a12cd2360dea88d53c295

// Edit by : Him-2C

import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchBears} from './actions'
import AddBear from './AddBear';
class Bear extends Component {
    componentDidMount() {
        this.props.fetchBears()
    }

    renderBears() {
        if ( Object.keys(this.props.bears).length !== 0 )
            return (
                this.props.bears.map((bear,index) =>
                    (<li key={index}>{bear.id} {bear.name} {bear.weight}</li>) )
        )
    }

    render() {
        return (<div>
                    <h1>Bear</h1>
                    <ul> {this.renderBears()}</ul>

                    <AddBear />
               </div>)
    }
}

function mapStateToProps( state ) {
    return {bears: state.bears }
}


export default connect(mapStateToProps, {fetchBears})(Bear)