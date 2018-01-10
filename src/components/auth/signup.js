import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signup extends Component {
    handleFormSubmit(values) {
        console.log(values)
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field component="input" type="email" name="email" className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <Field component="input" type="password" name="password" className="form-control" />
                </fieldset>
                <fieldset className="form-group">
                    <label>Confirm Password:</label>
                    <Field component="input" type="password" name="passwordConfirm" className="form-control" />
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign Up</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'signup'
})(
    connect(null, actions)(Signup)
    );