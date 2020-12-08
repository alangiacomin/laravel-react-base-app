import React, { Component } from "react";
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
//import PropTypes from "prop-types";
import { useField } from "formik";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const FormikTextField = ({ label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    return (
        <>
            <FormGroup>
                <FormLabel>{label}</FormLabel>
                <FormControl {...field} {...props} />
            </FormGroup>
            {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
        </>
    );
};

export default FormikTextField;
