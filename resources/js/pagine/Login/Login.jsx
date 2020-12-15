import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from '@reduxjs/toolkit';
import { connect } from 'react-redux';
import * as Yup from 'yup'; // for everything
import LoginComponent from './LoginComponent';
import { userLogin } from '../../user/UserActions';

const Login = (props) => {
  const [errorMessage, setErrorMessage] = useState('');

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
      onFailure: (error) => {
        setSubmitting(false);
        setErrorMessage(JSON.stringify(error.response.data, null, 2));
      },
    });
    // setTimeout(() => {
    //    alert(JSON.stringify(values, null, 2));
    //    setSubmitting(false);
    // }, 400);
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
// export default withRouter(connect(mapStateToProps)(Login));
