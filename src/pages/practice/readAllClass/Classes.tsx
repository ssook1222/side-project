import React from 'react';
import Tables from "./Tables";
import {Col, Row} from "react-bootstrap";
import "./table.css"

function Classes() {
    return (
        <div>
            <p style={{fontSize:"80%", paddingLeft:"20px", marginTop:"30px"}}>
                [2022-1학기 강의형태에 따른 수업 운영 방식]<br/>
                - 대면 : 전면 강의실 강의<br/>
                - 하이브리드 : 대면.비대면 동시 강의(강의실 강의+실시간 송출)<br/>
                - 원격(혼합) : 실시간.비실시간 혼합 원격 수업. 단, 실시간 강의 최소 3주 이상 필수<br/>
                - 원격(사이버) : 100% 비실시간 원격 강의<br/>
            </p>
            <hr style={{backgroundColor:"#E9E9F2"}}/>
            <div style={{width:"1800px", paddingLeft:"20px"}}>
                <Row style={{
                    paddingBottom:"10px",paddingTop:"10px",
                    borderBottom:"1px solid #dddddd"}}>
                    <Col className="titles">강의형태</Col>
                    <Col className="titles">강의명</Col>
                    <Col className="titles" style={{paddingRight:"35px"}}>강의번호</Col>
                    <Col className="titles">분반</Col>
                    <Col className="titles">계획</Col>
                    <Col className="titles">동영상</Col>
                    <Col className="titles">강의구분</Col>
                    <Col className="titles" style={{paddingRight:"30px"}}>강의시간</Col>
                    <Col className="titles">교수</Col>
                    <Col className="titles">이수단계</Col>
                    <Col className="titles" style={{paddingRight:"35px"}}>학점/이론/실습</Col>
                    <Col className="titles">정원</Col>
                    <Col className="titles">신청</Col>
                    <Col className="titles">여석</Col>
                    <Col className="titles">강의유형</Col>
                    <Col className="titles">언어</Col>
                    <Col className="titles">진로/산학연계</Col>
                    <Col className="titles">수강자격</Col>
                    <Col className="titles">수강유의사항</Col>
                    <Col className="titles">스노우보드-온라인출석부</Col>
                    <Col className="titles">주관학과</Col>
                    <Col className="titles">PF</Col>
                    <Col className="titles">학점교류생수강불가</Col>
                    <Col className="titles">난이도</Col>
                    <Col className="titles">특성화영역1</Col>
                    <Col className="titles">특성화영역2</Col>
                    <Col className="titles">특성화영역3</Col>
                </Row>
                <Tables></Tables>
            </div>
        </div>
    );
}
export default Classes;