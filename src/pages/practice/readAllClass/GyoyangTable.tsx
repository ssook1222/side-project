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
        const res = await axios.get(`/api/tables/gyoyang`);
        console.log(res.data);
        setTable(res.data);
    }


    return (
        <div>
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
    );
};

export default TableView;