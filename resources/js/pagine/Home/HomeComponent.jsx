import { PropTypes } from 'prop-types';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from '../../components/Layout';
import { LayoutType } from '../../components/Layout/Layout';

const HomeComponent = (props) => {
  const { testo } = props;
  return (
    <Layout type={LayoutType.TopFooter}>
      <Container>
        <Row>
          <Col>{testo}</Col>
        </Row>
      </Container>
    </Layout>
  );
};

HomeComponent.propTypes = {
  testo: PropTypes.string.isRequired,
};

export default HomeComponent;
