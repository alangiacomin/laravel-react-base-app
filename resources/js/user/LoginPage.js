import React, { Component } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
//import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup"; // for everything
import LayoutOneColumn from "../components/LayoutOneColumn";
import FormikTextField from "../components/FormikTextField";
import { userLogin } from "./UserActions";

export default withRouter(
    connect(
        (state) => {
            const { user } = state;
            return { user };
        },
        { userLogin }
    )(
        class LoginPage extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    errorMessage: "",
                };
            }
            setErrorMessage = (message) => {
                this.setState({ errorMessage: message ?? "" });
            };
            initialValues = {
                email: "",
                password: "",
            };

            validationSchema = Yup.object({
                email: Yup.string().required("Required"),
                //.email("Invalid email address")
                password: Yup.string().required("Required"),
            });

            onSubmit = (values, { setSubmitting }) => {
                const { userLogin } = this.props;
                this.setErrorMessage();
                userLogin(values.email, values.password, {
                    onFailure: (error) => {
                        setSubmitting(false);
                        this.setErrorMessage(JSON.stringify(error.response.data, null, 2));
                    },
                });
                //setTimeout(() => {
                //    alert(JSON.stringify(values, null, 2));
                //    setSubmitting(false);
                //}, 400);
            };

            // https://webdesignerwall.com/wdw-snippet/login-form-sign-in-form-bootstrap-4-login-card
            render() {
                const { user } = this.props;
                const { errorMessage } = this.state;
                if (user.id > 0) {
                    return <Redirect to={"/"} />;
                }
                return (
                    <LayoutOneColumn>
                        <Row className="my-5">
                            <Col lg={6} md={8} className="mx-auto">
                                <Formik
                                    initialValues={this.initialValues}
                                    validationSchema={this.validationSchema}
                                    onSubmit={this.onSubmit}
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
                    </LayoutOneColumn>
                );
            }
        }
    )
);
