import React from 'react';
import Boards from "../qna/QnABoardApp";
import Navbars from "../../navbar/Navbar";
import Footers from  "../../footer/FooterMain";
import {Image} from "react-bootstrap";

class WarningMain extends React.Component {
    render() {
        return(
            <div>
                <Navbars></Navbars>
                <div className="background">
                    <Image
                        className="img"
                        src="../images/QnA.png"></Image>
                </div>
                <h2 style={{color:"#162B7D", marginLeft:"50px",marginBottom:"50px",marginTop:"50px"}}>QnA</h2>
                <Boards></Boards>
                <Footers></Footers>
            </div>
        )
    }
}
export default WarningMain