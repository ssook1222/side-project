import React from 'react';
import Navbars from "../../../navbar/Navbar";
import Footers from  "../../../footer/FooterMain";
import {Button, Col, Image, Row} from "react-bootstrap";
import AlertIt from "./Alert";


class Ready extends React.Component {
    render() {
        return(
            <div>
                <Navbars></Navbars>
                <AlertIt></AlertIt>
                    <Row xs={3} md={12} style={{width:"100%", marginBottom:"30px"}}>
                    <Col>
                        <Button
                            disabled={true}
                            style={{
                                backgroundColor:"white", outline:"0", border:"0", width:"100%"
                            }} >
                            <Image style={{
                                width:"100%"
                            }} src="../images/ready/off1.png"></Image></Button>
                    </Col>
                    <Col>
                        <Button
                            disabled={true}
                            style={{
                                backgroundColor:"white", outline:"0", border:"0", width:"100%"
                            }} >
                            <Image
                                style={{
                                    width:"100%"
                                }}
                                src="../images/ready/off2.png"></Image>
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            href="/practice"
                            style={{
                                backgroundColor:"white", outline:"0", border:"0", width:"100%"
                            }} >
                            <Image
                                style={{
                                    width:"100%"
                                }}
                                src="../images/ready/on3.png"></Image>
                        </Button>
                    </Col>
                </Row>
                <Footers></Footers>
            </div>
        )
    }
}
export default Ready