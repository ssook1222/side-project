import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Board} from "../../dto/Board";
import axios from "axios";
import {Card} from "react-bootstrap";

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
            <Card>
                <Card.Title>{board?.title}</Card.Title>
                <Card.Text>
                    {board?.contents}
                </Card.Text>
            </Card>
        </div>
    );
};

export default BoardView;