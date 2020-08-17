import React, { Component } from 'react';
import { Container, Form, Input, Col, FormGroup, Label, Button, Card } from 'reactstrap';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <Container >
                <Card className="cardstyle form" >
                    <Form >
                        <h1 style={{ color: "white" }}>Login</h1><br/>
                        <Col>
                            <FormGroup>
                                <Label style={{ color: "white" }}>Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="exampleEmail"
                                    placeholder="email@email.com"
                                    required
                                    style={{ width: "80%",background: "black", color: "white",border: "1px solid gray" }}
                                />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="examplePassword" style={{ color: "white" }}>Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="examplePassword"
                                    placeholder="password"
                                    required
                                    style={{ width: "80%",background: "black",border: "1px solid gray"}}
                                />
                            </FormGroup>
                        </Col>
                        <Link className="Register" to="/register">If you don't have an account Register here .</Link><br/><br/>
                        <Button style={{ background: "gray",fontWeight: "600" }}>Submit</Button>
                    </Form>
                </Card>

            </Container>

        )
    }
}
export default Login;