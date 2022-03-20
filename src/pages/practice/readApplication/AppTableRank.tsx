import axios from "axios";
import "./AppTable.css"
import {Button, Col, Row} from "react-bootstrap";
import React, {useEffect, useState} from 'react';
import {Application} from "../../../dto/Application";

const AppTableRank: React.FC = () => {

    const [table, setTable] = useState<Array<Application>>([]);

    useEffect(() => {
        getTable();
    }, []);

    const getTable = async () => {
        const res = await axios.get(`/api/tables/application`);
        console.log(res.data);
        setTable(res.data);
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
                        <Col className="contents">정원 추가</Col>
                        <Col className="contents">수강신청 인원 추가</Col>
                        <Col className="contents">본인 순위 추가</Col>
                    </Row>
                )
            }
        </div>
    );
};

export default AppTableRank;