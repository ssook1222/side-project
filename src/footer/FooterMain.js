import React from 'react';
import "./Footer.css";

class FooterMain extends React.Component {
    render() {
        return(
            <div className="footer">
                <div className="footer-text">
                    <br/>
                    <h4 className="footer-title">Contact US</h4>
                    <h5><a className="mail" href="mailto:sw18@sookmyung.ac.kr">sw18@sookmyung.ac.kr</a></h5>
                    <h5><a className="mail" href="mailto:chlthr1222@sookmyung.ac.kr">chlthr1222@sookmyung.ac.kr</a></h5>
                    <hr/>
                    <h5 className="footer-text">본 사이트의 컨텐츠는 저작권법의 보호를 받는 바, 무단 전재,복사,배포 등을 금합니다.</h5>
                    <h6 className="footer-text">Copyright © 2022 WiseCourseRegistration. All Rights Reserved.</h6>
                    <br/>
                </div>
            </div>
        )
    }
}
export default FooterMain