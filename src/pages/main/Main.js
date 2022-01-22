import React from 'react';
import Navbars from "../../navbar/Navbar";
import Footers from  "../../footer/FooterMain";
import {Image} from "react-bootstrap";
import "./Main.css";
import "./Quick";
import Quick from "./Quick";

class Main extends React.Component {
    render() {
        return(
            <div>
                <Navbars></Navbars>
                <div className="background">
                    <Image
                        className="img"
                        src="../images/Main_Text_Logo.png"></Image>
                </div>
                <div className="background2" style={{backgroundColor:"#162B7D", marginTop:"-15px"}}>
                    <Image
                        style={{display:"block",marginLeft:"auto",marginRight:"auto",marginBottom:"50px",width:"10%"}}
                        src="../images/mouse.png"></Image>
                    <Image
                        className="tree"
                        style={{display:"block",marginLeft:"auto",marginRight:"auto"}}
                        src="../images/main_tree.png"></Image>
                    <Quick></Quick>
                </div>
                <Footers></Footers>
            </div>
        )
    }
}
export default Main