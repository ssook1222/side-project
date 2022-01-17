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
                <div className="background2" style={{height:"1000px", backgroundColor:"#162B7D", marginTop:"-15px"}}>
                    <Image
                        style={{display:"block",marginLeft:"auto",marginRight:"auto",width:"10%"}}
                        src="../images/mouse.png"></Image>
                </div>
            </div>
        )
    }
}
export default Main