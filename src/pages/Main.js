import React from 'react';
import Navbars from "../navbar/Navbar";
import {Image} from "react-bootstrap";
class Main extends React.Component {
    render() {
        return(
            <div>
                <Navbars></Navbars>
                <div className="background"
                     style={{width:"100%",
                         marginTop:"-20px",
                         height:"500px",
                         backgroundColor:"#162B7D"}}>
                    <Image
                        style={{display:"block",marginRight:"auto",marginLeft:"auto",marginBottom:"10px",width:"75%"}}
                        src="../images/Main_Text_Logo.png"></Image>
                </div>
            </div>
        )
    }
}
export default Main