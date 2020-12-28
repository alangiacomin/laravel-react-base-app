import { bindActionCreators } from '@reduxjs/toolkit';
import { PropTypes } from 'prop-types';
import React, { lazy, Suspense, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup'; // for everything
import { setDocumentTitle } from '../../common/utility';
import Layout from '../../components/Layout';
import { LayoutType } from '../../components/Layout/Layout';
import { userLogin } from '../../user/UserActions';

const LoginComponent = lazy(() => import('./LoginComponent'));

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
    <Layout type={LayoutType.OneColumn}>
      <Suspense fallback={null}>
        <LoginComponent
          errorMessage={errorMessage}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        />
      </Suspense>
    </Layout>
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
