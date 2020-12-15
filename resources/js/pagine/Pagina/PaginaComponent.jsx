import React from 'react';
import { PropTypes } from 'prop-types';
import { Col, Image, Row } from 'react-bootstrap';
import Layout from '../../components/Layout';
import { LayoutType } from '../../components/Layout/Layout';

const PaginaComponent = (props) => {
  const { sottotitolo, titolo, contenuti } = props;
  return (
    <Layout type={LayoutType.OneColumn}>
      <Row className="clearfix">
        <Col>
          <h4>{sottotitolo}</h4>
          <h1>
            {titolo}
            <Image className="float-right" src="https://via.placeholder.com/300" />
          </h1>
          <p>{contenuti}</p>
        </Col>
      </Row>
    </Layout>
  );
};

PaginaComponent.propTypes = {
  sottotitolo: PropTypes.string.isRequired,
  titolo: PropTypes.string.isRequired,
  contenuti: PropTypes.string.isRequired,
};

export default PaginaComponent;
