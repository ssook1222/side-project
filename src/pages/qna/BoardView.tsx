import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Board} from "../../dto/Board";
import axios from "axios";
import {Button, Card, Row} from "react-bootstrap";
import {CommentList} from "../../components/CommentList";

const BoardView: React.FC = () => {

    let navigate = useNavigate();
    let parameter: any = useParams();

    const [board, setBoard] = useState<Board>({
        id: "", password: "", questionid: 0,
        title: '',
        contents: ''
    });

    useEffect(() => {
        parameter=parameter.questionid;
        getBoard(parameter);
    }, []);

    const getBoard = async (questionid: number) => {
        const res = await axios.get(`/api/board/${questionid}`);
        setBoard(res.data);
    }

    const handleDelete = async () => {
        console.log(typeof(parameter.questionid))
        const res = await axios.delete(`/api/board?questionid=${parameter.questionid}`);
        console.log(res.data)
        alert("정상적으로 삭제되었습니다.");
        navigate("/QnA");
    }

    return (
        <div>
            <div style={{marginTop:"30px", width:"80%", display:"block", marginLeft:"auto", marginRight:"auto"}}>
                <Card>
                    <Card.Title
                    style={{marginTop:"30px", marginLeft:"30px"}}><h3>{board?.title}</h3></Card.Title>
                    <Card.Text style={{marginTop:"5px", marginLeft:"30px"}}>
                        {board?.id}
                    </Card.Text>
                    <hr/>
                    <Card.Text style={{marginTop:"30px", marginLeft:"30px", marginBottom:"30px"}}>
                        {board?.contents}
                    </Card.Text>
                </Card>
                <Row className="justify-content-right" style={{marginTop:"30px"}}>
                    <Button variant="light" href="/QnA"
                            style={{width:"20%", marginBottom:"30px", marginRight:"50px"}}>돌아가기</Button>
                    {/*<Button variant="light" onClick={handleDelete}*/}
                    {/*        style={{width:"20%", marginBottom:"30px"}}>삭제</Button>*/}
                </Row>
            </div>

            <CommentList board_id={parameter.questionid}></CommentList>

        </div>
    );
};

export default BoardView;