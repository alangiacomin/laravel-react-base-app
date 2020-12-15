import React from 'react';
import { PropTypes } from 'prop-types';
import { Card } from 'react-bootstrap';
import Layout from '../../components/Layout';
import { LayoutType } from '../../components/Layout/Layout';

const ErrorComponent = (props) => {
  const { descError } = props;
  return (
    <Layout type={LayoutType.OneColumn}>
      <Card>
        <Card.Header>Errore</Card.Header>
        <Card.Body>
          <div className="col-xl-9 mx-auto">
            <h1 className="mb-5">
              {descError}
            </h1>
          </div>
        </Card.Body>
        <Card.Footer />
      </Card>
    </Layout>
  );
};

ErrorComponent.propTypes = {
  descError: PropTypes.string.isRequired,
};

export default ErrorComponent;
