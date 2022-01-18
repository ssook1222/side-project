import React from 'react';
import Navbars from "../../navbar/Navbar";
import {Image} from "react-bootstrap";
import "./Main.css";

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
                </div>
            </div>
        )
    }
}
export default Main