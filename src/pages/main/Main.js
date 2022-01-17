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
            </div>
        )
    }
}
export default Main