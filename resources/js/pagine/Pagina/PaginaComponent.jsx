import React from 'react';
import { PropTypes } from 'prop-types';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { LayoutType } from '../../components/Layout/Layout';

const PaginaComponent = (props) => {
  const {
    sottotitolo, titolo, contenuti, canEdit, editMode,
  } = props;
  return (
    <Layout type={LayoutType.OneColumn}>
      <Row className="clearfix">
        <Col>
          <h4>{sottotitolo}</h4>
          <h1>
            {titolo}
            <Image className="float-right" src="https://via.placeholder.com/300" />
          </h1>
          <p>{!editMode
            ? contenuti
            : <><input type="text" defaultValue={contenuti} /><br /><Link to="/pagina">Indietro</Link></>}
          </p>
          {!editMode && canEdit && <p><Link to="/pagina/edit">Modifica dati</Link></p>}
          <p><Link to="/pagina/edit">Modifica dati (sempre)</Link></p>
          <p><Link to="/logout">Logout</Link></p>
        </Col>
      </Row>
    </Layout>
  );
};

PaginaComponent.propTypes = {
  sottotitolo: PropTypes.string.isRequired,
  titolo: PropTypes.string.isRequired,
  contenuti: PropTypes.string.isRequired,
  canEdit: PropTypes.bool,
  editMode: PropTypes.bool,
};

PaginaComponent.defaultProps = {
  canEdit: false,
  editMode: false,
};

export default PaginaComponent;
