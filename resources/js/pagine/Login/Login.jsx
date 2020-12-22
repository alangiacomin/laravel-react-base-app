import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import * as Yup from 'yup'; // for everything
import { useHistory, useLocation } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import { userLogin } from '../../user/UserActions';
import { setDocumentTitle } from '../../common/utility';

const Login = (props) => {
  setDocumentTitle();
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const location = useLocation();

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    // .email("Invalid email address")
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    const { eseguiLogin } = props;
    setErrorMessage();
    eseguiLogin(values.email, values.password, {
      onSuccess: (data) => {
        setSubmitting(false);
        location.state && location.state.referrer && history.push(location.state.referrer.pathname);
      },
      onFailure: (error) => {
        setSubmitting(false);
        setErrorMessage(JSON.stringify(error.response.data, null, 2));
      },
    });
  };

  return (
    <LoginComponent
      errorMessage={errorMessage}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    />
  );
};

Login.propTypes = {
  eseguiLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

// userLogin
const mapDispatchToProps = (dispatch) => bindActionCreators({
  eseguiLogin: userLogin,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
