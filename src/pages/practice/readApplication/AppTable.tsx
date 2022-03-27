import axios from "axios";
import "./ClassesApp.css"
import {Button, Col, Row} from "react-bootstrap";
import React, {useEffect, useState} from 'react';
import {Application} from "../../../dto/Application";

const AppTable: React.FC = () => {

    const [table, setTable] = useState<Array<Application>>([]);

    useEffect(() => {
        getTable();
    }, []);

    const getTable = async () => {
        const res = await axios.get(`/api/tables/application`);
        setTable(res.data);
    }

    const handleCancel = async(id: number) => {
        const res = await axios.delete(`/api/tables/application?id=${id}`);
        console.log(id);
        alert("선택하신 과목이 수강취소되었습니다.");
        window.location.reload();
    }

    return (
        <div>
            {
                table.map((table: Application)=>
                    <Row style={{
                        paddingBottom:"10px",paddingTop:"10px",
                        borderBottom:"1px solid #dddddd"}}>
                        <Col className="contents">{table.lectureName}</Col>
                        <Col className="contents">{table.lectureNumber}</Col>
                        <Col className="contents">{table.lectureSubClass}</Col>
                        <Col className="contents">{table.plan}</Col>
                        <Col className="contents">{table.classType}</Col>
                        <Col className="contents">{table.lectureTime}</Col>
                        <Col className="contents">{table.step}</Col>
                        <Col className="contents">{table.lecturePoint}</Col>
                        <Col className="contents">{table.professor}</Col>
                        <Col className="contents">{table.lectureLanguage}</Col>
                        <Col className="contents">{table.reason}</Col>
                        <Col className="contents">{table.applyDate}</Col>
                        <Col className="contents">{table.retake}</Col>
                        <Col className="contents">
                            <Button onClick={(e)=>handleCancel(table.id)} id={"cancelBtn"}>취소</Button>

                        </Col>
                    </Row>
                )
            }
        </div>
    );
};

export default AppTable;