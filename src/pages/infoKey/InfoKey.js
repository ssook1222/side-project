import React from 'react';
import axios from 'axios';
import { Image } from 'react-bootstrap';
import Navbars from '../../navbar/Navbar';
import Footers from '../../footer/FooterMain'

class InfoKey extends React.Component {
    render() {
        return(
            <div>
                <Navbars></Navbars>

                <div className="background">
                    <Image
                        className="img"
                        src="../images/FAQ_Text_Logo.png"/>
                </div>

                <div id="textFAQ">
                    수강순위, 최소이수학점 등 수강신청에 대한 <br />자세한 정보를 전달하는 페이지입니다.
                </div>

                <Footers></Footers>
            </div>
        )
    }
}

export default InfoKey;