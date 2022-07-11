import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IpAddressGetterIp4 from './IpAddressGetterIp4';
import IpAddressGetterIp6 from './IpAddressGetterIp6';

class Body extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <h3>IP4 address</h3>
                            <IpAddressGetterIp4 />
                        </Col>
                        <Col>
                            <h3>IP6 (IP4) address</h3>
                            <IpAddressGetterIp6 />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Body;