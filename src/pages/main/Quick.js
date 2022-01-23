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
                        <p className="main-text2">
                            수강신청 일정과 신청 시 주의사항을 확인하실 수 있습니다.
                        </p>
                        <br/>
                        <Button className="btn-light move">더 알아보기</Button>
                    </h1>

                </div>
                <div>
                    <Image
                        className="circle"
                        src="../images/main_circle_02.png"></Image>
                    <h1 className="main-text" >수강신청 설명
                        <br/>
                        <p className="main-text2" >
                            수강신청 연습 방법과 수강신청 시스템에 대한 설명을 확인할 수 있습니다.
                        </p>
                        <br/>
                        <Button className="btn-light move">더 알아보기</Button>
                    </h1>
                </div>
                <div>
                    <Image
                        className="circle"
                        src="../images/main_circle_03.png"></Image>
                    <h1 className="main-text">수강신청 연습
                        <br/>
                        <p className="main-text2" >
                            상황에 맞는 수강신청 연습을 해볼 수 있습니다.
                        </p>
                        <br/>
                        <Button className="btn-light move">이동하기</Button>
                    </h1>

                </div>
                <div>
                    <Image
                        className="circle"
                        src="../images/main_circle_04.png"></Image>
                    <h1 className="main-text" >수강신청 FAQ/Q&A
                        <br/>
                        <p className="main-text2">
                            수강신청 관련 궁금한 것들을 확인하실 수 있습니다.
                        </p>
                        <br/>
                        <Button className="btn-light move">더 알아보기</Button>
                    </h1>
                </div>
            </div>
        )
    }
}
export default Quick