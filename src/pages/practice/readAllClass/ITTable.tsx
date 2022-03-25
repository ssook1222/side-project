import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Table} from "../../../dto/Table";
import "./table.css"
import {Col, Row} from "react-bootstrap";

const TableView: React.FC = () => {

    const [table, setTable] = useState<Array<Table>>([]);

    useEffect(() => {
        getTable();
    }, []);

    const getTable = async () => {
        const res = await axios.get(`/api/tables/it`);
        console.log(res.data);
        setTable(res.data);
    }


    return (
        <div>
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
                        <Col className="titles" style={{paddingRight:"5px"}}>강의명</Col>
                        <Col className="titles" style={{paddingRight:"35px"}}>강의번호</Col>
                        <Col className="titles">분반</Col>
                        <Col className="titles">계획</Col>
                        <Col className="titles">동영상</Col>
                        <Col className="titles">강의구분</Col>
                        <Col className="titles" style={{paddingRight:"30px"}}>강의시간</Col>
                        <Col className="titles" style={{paddingRight:"-10px"}}>교수</Col>
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
                </div>
            </div>
            <div style={{width:"1800px", paddingLeft:"20px"}}>
            {
                table.map((table: Table)=>
                    <Row style={{
                        paddingBottom:"10px",paddingTop:"10px",
                        borderBottom:"1px solid #dddddd"}}>
                        <Col className="contents">{table.lectureForm}</Col>
                        <Col className="contents">{table.lectureName}</Col>
                        <Col className="contents">{table.lectureNumber}</Col>
                        <Col className="contents">{table.lectureSubClass}</Col>
                        <Col className="contents">{table.plan}</Col>
                        <Col className="contents">{table.movie}</Col>
                        <Col className="contents">{table.classType}</Col>
                        <Col className="contents">{table.lectureTime}</Col>
                        <Col className="contents">{table.professor}</Col>
                        <Col className="contents">{table.step}</Col>
                        <Col className="contents">{table.lecturePoint}</Col>
                        <Col className="contents">{table.lecturePeople}</Col>
                        <Col className="contents">{table.lectureApply}</Col>
                        <Col className="contents">{table.lectureSeat}</Col>
                        <Col className="contents">{table.lectureType}</Col>
                        <Col className="contents">{table.lectureLanguage}</Col>
                        <Col className="contents">{table.withComp}</Col>
                        <Col className="contents">{table.lectureClassfi}</Col>
                        <Col className="contents">{table.lectureWarn}</Col>
                        <Col className="contents">{table.snowboard}</Col>
                        <Col className="contents">{table.dept}</Col>
                        <Col className="contents">{table.pf}</Col>
                        <Col className="contents">{table.schoolExchange}</Col>
                        <Col className="contents">{table.difficulty}</Col>
                        <Col className="contents">{table.specification1}</Col>
                        <Col className="contents">{table.specification2}</Col>
                        <Col className="contents">{table.specification3}</Col>
                    </Row>
                )
            }
            </div>
        </div>
    );
};

export default TableView;