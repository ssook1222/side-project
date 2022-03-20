import React from 'react';
import AppTableRank from "./AppTableRank";
import "./Ranking.css"
import {Button, Col, Row} from "react-bootstrap";

function Ranking() {

    return (
        <div>
            <p id ="title"> Ranking </p>
            <hr style={{border: "2px solid #387EC6", width: "1000px"}}/>

            <hr style={{backgroundColor:"#E9E9F2", width: "1000px"}}/>
            <div style={{width:"1000px", paddingLeft:"20px"}}>
                <Row style={{
                    paddingBottom:"10px",paddingTop:"10px",
                    borderBottom:"1px solid #dddddd"}}>
                    <Col className="titles">교과목명</Col>
                    <Col className="titles">과목번호</Col>
                    <Col className="titles">분반</Col>
                    <Col className="titles">정원</Col>
                    <Col className="titles">수강신청 인원</Col>
                    <Col className="titles">본인 순위</Col>
                </Row>
                <AppTableRank></AppTableRank>
            </div>

            <div className="txtIn">
                현재 신청한 분반 내에서 자신의 수강순위를 조회하여 확정/탈락여부를 미리 예상해 볼 수 있습니다.<br />
                &nbsp;(참고 자료이며 절대적인 수강 확정/탈락 기준은 아닙니다.)<br />
                • 현 조회 시점 기준 순위이므로 수강신청인원에 변동이 있을 때마다 결과가 달라질 수 있습니다.<br />
                • 특정 과목에서는 위 순위와 별도로 수강자격 요건을 명시하여 확정/탈락처리할 수도 있습니다.<br />
                • 특정 자격요건이 명시되지 않은 교과목은 정원 외 순위의 경우, 수강탈락될 수 있으니 조회된 순위를<br />
                &nbsp; 참조하여 신청 과목 및 분반을 선택해 주십시오.<br />
                • 순위조회 창을 닫은 후 1분 경과 후에 순위조회가 다시 가능합니다.<br />
                • 직전학기 이수학점과 성적이 없는 신입생 전용 분반(예▹교양필수)의 순위는 임의로 정해집니다.<br/><br/>

                ※ 수강신청 순위 기준<br/>
                - 교양과목: 학년순(4/1/3/2), 직전학기 이수학점순, 직전학기 성적순<br/>
                &nbsp; (교양필수과목 중 1학년 우선 수강과목은 1/4/3/2 학년순임)<br/>
                - 전공과목: 제1전공자, 복수/연계/부전공자<br/>
                &nbsp; (전공의 통일조건에서는 학년(4/3/2/1), 직전학기 이수학점, 직전학기 성적 순으로 순위 매김)
                <br/><br/><br/><br/>

            </div>

            <div>
                <Button
                    style={{marginLeft: "900px", marginTop:"50px",
                        backgroundColor: "lightgrey", border: "lightgrey", color: "black"}}
                    href="/practice">확인</Button>
            </div>
        </div>
    );
}
export default Ranking;