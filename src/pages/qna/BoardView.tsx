import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Board} from "../../dto/Board";
import axios from "axios";
import {Card} from "react-bootstrap";
import {CommentList} from "../../components/CommentList";

const BoardView: React.FC = () => {

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

    return (
        <div>
            <Card style={{marginTop:"30px", width:"80%", display:"block", marginLeft:"auto", marginRight:"auto"}}>
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
            <CommentList board_id={parameter.questionid}></CommentList>
        </div>
    );
};

export default BoardView;