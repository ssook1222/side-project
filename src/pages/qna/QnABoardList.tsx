// @ts-ignore
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Col, ListGroup, Row} from "react-bootstrap";
import {Board} from "../../dto/Board";
import {useNavigate} from "react-router-dom";

const BoardList: React.FC = (props: any) => {
    let navigate = useNavigate();
    console.log(props);
    const [boardList, setBoardList] = useState<Array<Board>>([]);

    useEffect(() => {
        getBoardList();
    }, []);

    const getBoardList = async () => {
        const res  = await axios.get(`/api/board/read?page_number=1&page_size=30`);
        //생각해보니 시작할 때는 항상 1임
        console.log(res.data.length);
        setBoardList(res.data);
    }

    return (
        <div>
            <Row className="mb-3 justify-content-end">
                <Col xs="auto" sm="auto">
                    <Button variant="light" href="/board-register">등 록</Button>
                </Col>
            </Row>
            {
                boardList.map((board: Board)=>
                        <Row style={{
                            paddingBottom:"10px",paddingTop:"10px",
                            borderBottom:"1px solid #dddddd"}}>
                            <Button className="btn-light" onClick={()=>navigate(`/board-view/${board.questionid}`)}>
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