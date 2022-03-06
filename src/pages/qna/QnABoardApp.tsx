import React from 'react';
import {ListGroup} from "react-bootstrap";
import BoardList from "../qna/QnABoardList";

function BoardApp() {
    return (
        <ListGroup className="p-3"
                   style={{width:"80%",
                       display:"block",
                       marginLeft:"auto",
                       marginRight:"auto",
                       marginBottom:"100px"}}>
            <BoardList></BoardList>
        </ListGroup>
    );
}

export default BoardApp;