import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
    
    componentWillMount() {
        this.props.fetchMessage();
    }
    
    render() {
        return (
            <div>
                <strong>ou yeeeah... thats the feature!</strong>
                <p>{ this.props.message }</p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    message: state.auth.message
});

export default connect(mapStateToProps, actions)(Feature);