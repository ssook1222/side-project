import React from 'react';
import"./Navbar.css"
import {Navbar, Nav, NavDropdown, Container, Image} from "react-bootstrap";
class Navbars extends React.Component {
    render() {
        return(
            <div>
                <Navbar id="navbar" className="background" style={{marginBottom:"20px"}} expand="lg">
                    <Container>
                        <Navbar.Brand style={{color:"white"}} href="/">
                            <Image style={{width:"15%"}} src="/images/Main-Logo.png"></Image>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto justify-content-end">
                                <Nav.Link style={{color:"white", marginRight:"10px",fontSize:"20px"}} href="/Warning">수강신청 주의사항</Nav.Link>
                                <NavDropdown id="drop-down" style={{color:"white",marginRight:"10px",fontSize:"20px"}} title="수강신청 설명">
                                    <NavDropdown.Item style={{color:"#162B7D"}} href="#action/3.1">수강신청 튜토리얼</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item style={{color:"#162B7D"}} href="/InfoKey">수강신청 설명</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link style={{color:"white", marginRight:"10px",fontSize:"20px"}} href="/FAQ">수강신청 FAQ</Nav.Link>
                                <Nav.Link style={{color:"white", marginRight:"10px",fontSize:"20px"}} href="/QnA">수강신청 Q&A</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
export default Navbars