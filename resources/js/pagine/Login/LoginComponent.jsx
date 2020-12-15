import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, Col, Row,
} from 'react-bootstrap';
import { Formik, Form } from 'formik';
import * as Yup from 'yup'; // for everything
import FormikTextField from '../../components/FormikField/FormikTextField';
import Layout from '../../components/Layout';
import { LayoutType } from '../../components/Layout/Layout';

function LoginComponent(props) {
  const {
    errorMessage, initialValues, validationSchema, onSubmit,
  } = props;
  return (
    <Layout type={LayoutType.OneColumn}>
      <Row className="my-5">
        <Col lg={6} md={8} className="mx-auto">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Card>
                <Card.Body>
                  <Card.Title>Sign in</Card.Title>
                  <Form>
                    <FormikTextField
                      name="email"
                      type="email"
                      label="Your email"
                      placeholder="Email"
                      autoFocus
                    />
                    <FormikTextField
                      name="password"
                      type="password"
                      label="Your password"
                      placeholder="******"
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      block
                      disabled={isSubmitting}
                    >
                      Login
                    </Button>
                    <div className="error">{errorMessage}</div>
                  </Form>
                </Card.Body>
              </Card>
            )}
          </Formik>
        </Col>
      </Row>
    </Layout>
  );
}

LoginComponent.propTypes = {
  errorMessage: PropTypes.string,
  initialValues: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }),
  validationSchema: PropTypes.instanceOf(Yup.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

LoginComponent.defaultProps = {
  errorMessage: '',
  initialValues: { },
};

export default LoginComponent;
