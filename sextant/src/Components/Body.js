import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IpAddressGetterIp4 from './IpAddressGetterIp4';
import IpAddressGetterIp6 from './IpAddressGetterIp6';
import PacketLatency from './PacketLatency';

class Body extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <h3>IP4 address</h3>
                            <IpAddressGetterIp4 />
                            {/* <p>---</p> */}
                            <PacketLatency />
                        </Col>
                        <Col>
                            <h3>IP6 address</h3>
                            <IpAddressGetterIp6 />
                            {/* <p>---</p> */}
                            <PacketLatency />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Body;