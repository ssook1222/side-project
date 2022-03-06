// @ts-ignore
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Col, Row} from "react-bootstrap";
import {Board} from "../../dto/Board";
import {useNavigate} from "react-router-dom";
import Pagination from "../faq/Pagination"

const BoardList: React.FC = (props: any) => {

    let navigate = useNavigate();
    console.log(props);
    const [boardList, setBoardList] = useState<Array<Board>>([]);
    const [page, setPage] = useState(1);
    const limit = 10;
    const offset = (page - 1)*limit;

    useEffect(() => {
        getBoardList();
        let total = totalBoard();
    }, []);

    const getBoardList = async () => {
        const res  = await axios.get(`/api/board/read`);
        //생각해보니 시작할 때는 항상 1임
        console.log(res.data.length);
        setBoardList(res.data);
    }

    const totalBoard = async () => {
        const res  = await axios.get(`/api/board/count`);
        console.log(res.data);
        return res.data;
    }


    return (
        <div>
            <Row className="mb-3 justify-content-end">
                <Col xs="auto" sm="auto">
                    <Button variant="light" href="/board-register">등 록</Button>
                </Col>
            </Row>
            {
                boardList.slice(offset, offset+limit).map((board: Board)=>
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
            <Pagination
                total={boardList.length}
                limit={limit}
                page={page}
                setPage={setPage}
                clickedBtn={props.clikcedBtn} />
        </div>
    );
};

export default BoardList;