import React from 'react';
import Navbars from "../../navbar/Navbar";
import Footers from  "../../footer/FooterMain";
import Schedule from "./Schedule";
import Information from "./Information";
import {Image} from "react-bootstrap";

class WarningMain extends React.Component {
    render() {
        return(
            <div>
                <Navbars></Navbars>
                <div className="background">
                    <Image
                        className="img"
                        src="../images/Schedule.png"></Image>
                </div>
                <Schedule></Schedule>
                <Information></Information>
                <Footers></Footers>
            </div>
        )
    }
}
export default WarningMain