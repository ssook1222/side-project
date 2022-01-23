import React from 'react';
import Navbars from "../../navbar/Navbar";
import Footers from  "../../footer/FooterMain";
import Schedule from "./Schedule";
import Information from "./Information";

class WarningMain extends React.Component {
    render() {
        return(
            <div>
                <Navbars></Navbars>
                <Schedule></Schedule>
                <Information></Information>
                <Footers></Footers>
            </div>
        )
    }
}
export default WarningMain