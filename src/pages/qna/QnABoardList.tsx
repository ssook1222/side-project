// @ts-ignore
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Col, ListGroup, Row} from "react-bootstrap";
import {Board} from "../../dto/Board";

const BoardList: React.FC = () => {
    const [boardList, setBoardList] = useState<Array<Board>>([]);

    useEffect(() => {
        getBoardList();
    }, []);

    const getBoardList = async () => {
        const res  = await axios.get('/api/board/read?page_number=1&page_size=10');
        console.log(res);
        setBoardList(res.data);
    }

    return (
        <div>
            {
                boardList.map((board: Board)=>
                        <Row style={{
                            paddingBottom:"10px",paddingTop:"10px",
                            borderBottom:"1px solid #dddddd"}}>
                            <Button className="btn-light">
                                <Col style={{display:"inline-block"}} xs={12} md={8}>{board.title}</Col>
                                <Col style={{display:"inline-block"}} xs={6} md={4}>{board.id}</Col>
                            </Button>
                        </Row>
                    )
            }
        </div>
    );
};

export default BoardList;