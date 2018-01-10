import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import * as actions from '../../actions';
import { connect } from 'react-redux';

class Signup extends Component {
    handleFormSubmit(values) {
        this.props.signupUser(values);
    }

    renderAlert() {
        if(this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Ooops! </strong> {this.props.errorMessage}
                </div>
            );
        }
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
                {this.renderAlert()}
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

    if (!values.email) {
        errors.email = 'Please enter a valid email'
    }
    if (!values.password) {
        errors.password = 'Please enter a password'
    }
    if (!values.passwordConfirm) {
        errors.passwordConfirm = 'Please re-enter ur password'
    }

    if (values.passwordConfirm && (values.password !== values.passwordConfirm)) {
        errors.passwordConfirm = 'Passwords must match';
    }

    return errors
}

const mapStateToProps = (state) => ({
    errorMessage: state.auth.error
})


export default reduxForm({
    form: 'signup',
    validate
})(
    connect(mapStateToProps, actions)(Signup)
    );