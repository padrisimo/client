import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signup extends Component {
    handleFormSubmit(values) {
        console.log('u submit ', values)
    }

    render() {
        const { errors, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field component={renderField} type="email" name="email"/>
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <Field component={renderField} type="password" name="password"/>
                </fieldset>
                <fieldset className="form-group">
                    <label>Confirm Password:</label>
                    <Field component={renderField} type="password" name="passwordConfirm"/>
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign Up</button>
            </form>
        );
    }
}

const renderField = ({ input, type, meta: { touched, error } }) => (
    <div>
        <input {...input} type={type} className="form-control"/>
        {touched && error && <span className="text-danger">{error}</span>}
    </div>
);

const validate = values => {
    const errors = {}

    if (values.password !== values.passwordConfirm) {
        errors.password = 'Passwords must match';
    }

    return errors
}


export default reduxForm({
    form: 'signup',
    validate
})(
    connect(null, actions)(Signup)
    );