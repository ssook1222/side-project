import React from 'react';
import AppTable from "./AppTable";
import "./AppTable.css"
import {Col, Row} from "react-bootstrap";
import Classes from "../readAllClass/Classes";

function ClassesApp() {
    return (
        <div>
            <hr style={{backgroundColor:"#E9E9F2"}}/>
            <div style={{width:"1800px", paddingLeft:"20px"}}>
                <Row style={{
                    paddingBottom:"10px",paddingTop:"10px",
                    borderBottom:"1px solid #dddddd"}}>
                    <Col className="titles">과목명</Col>
                    <Col className="titles">과목번호</Col>
                    <Col className="titles">분반</Col>
                    <Col className="titles">계획</Col>
                    <Col className="titles">교과구분</Col>
                    <Col className="titles">강의시간</Col>
                    <Col className="titles">이수단계</Col>
                    <Col className="titles">학점/이론/실습</Col>
                    <Col className="titles">담당교수</Col>
                    <Col className="titles">언어</Col>
                    <Col className="titles">신청사유</Col>
                    <Col className="titles">신청일</Col>
                    <Col className="titles">재수강 년도 학기</Col>
                    <Col className="titles">취소</Col>
                </Row>
                <AppTable></AppTable>
                <Classes></Classes>
            </div>
        </div>
    );
}
export default ClassesApp;