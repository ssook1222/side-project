import React from 'react';
import {Button, Image} from "react-bootstrap";
import "./Quick.css";

class Quick extends React.Component {
    render() {
        return(
            <div>
                <div>
                    <Image
                        className="circle"
                        src="../images/main_circle_01.png"></Image>
                    <h1 className="main-text" >수강신청 일정
                        <br/>
                        <p style={{fontSize:"20px",marginTop:"10px"}}>
                            수강신청 일정과 신청 시 주의사항을 확인하실 수 있습니다.
                        </p>
                        <Button className="btn-light">더 알아보기</Button>
                    </h1>

                </div>
                <div>
                    <Image
                        className="circle"
                        src="../images/main_circle_02.png"></Image>
                    <h1 className="main-text" >수강신청 일정
                        <br/>
                        <p style={{fontSize:"20px",marginTop:"10px"}}>
                            수강신청 일정과 신청 시 주의사항을 확인하실 수 있습니다.
                        </p>
                        <Button className="btn-light">더 알아보기</Button>
                    </h1>
                </div>
                <div>
                    <Image
                        className="circle"
                        src="../images/main_circle_03.png"></Image>
                    <h1 className="main-text" >수강신청 일정
                        <br/>
                        <p style={{fontSize:"20px",marginTop:"10px"}}>
                            수강신청 일정과 신청 시 주의사항을 확인하실 수 있습니다.
                        </p>
                        <Button className="btn-light">더 알아보기</Button>
                    </h1>
                </div>
                <div>
                    <Image
                        className="circle"
                        src="../images/main_circle_04.png"></Image>
                    <h1 className="main-text" >수강신청 일정
                        <br/>
                        <p style={{fontSize:"20px",marginTop:"10px"}}>
                            수강신청 일정과 신청 시 주의사항을 확인하실 수 있습니다.
                        </p>
                        <Button className="btn-light">더 알아보기</Button>
                    </h1>
                </div>
            </div>
        )
    }
}
export default Quick