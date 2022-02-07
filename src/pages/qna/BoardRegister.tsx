import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {Board} from "../../dto/Board";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const BoardRegister: React.FC = () => {
    let navigate = useNavigate();
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;
        if (!form.checkValidity()) {
            setValidated(false);
            return;
        }

        setValidated(true);

        const board = {
            id:form.IDInput.value,
            password:form.PWInput.value,
            title: form.titleInput.value,
            contents: form.contentText.value
        }

        addBoard(event, board);
        alert("성공적으로 저장되었습니다.");
        navigate("/QnA");
    };

    const addBoard = async (props:any, board: Board) => {
        const res = await axios.post('/api/board', board);
        console.log(res);
    }

    return (
        <>
            <h1 style={{width:"80%", display:"block", marginLeft:"auto",
                marginRight:"auto", marginTop:"10px"
            }}>글 작성하기</h1>
            <hr/>
            <Form validated={validated} onSubmit={handleSubmit}
            style={{width:"80%",
                display:"block",
                marginLeft:"auto",
                marginRight:"auto"
            }}>
                <Form.Group controlId="IDInput"
                            style={{
                                marginLeft:"auto", marginRight:"auto",
                                display:"inline-block",
                                marginTop:"20px"}}>
                    <Form.Label><h4>작성자</h4></Form.Label>
                    <Form.Control
                        style={{display:"inline-block", width:"50%", marginLeft:"20px"}}
                        required type="text" placeholder="10자 이내로 작성해주세요." maxLength={10} />
                    <Form.Control.Feedback>유효 값입니다.</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">유효하지 않은 값입니다.</Form.Control.Feedback>
                </Form.Group >
                <Form.Group controlId="PWInput"
                            style={{
                                marginLeft:"auto", marginRight:"auto",
                                display:"inline-block",
                                marginTop:"20px"}}>
                    <Form.Label><h4>비밀번호</h4></Form.Label>
                    <Form.Control
                        style={{display:"inline", width:"50%", marginLeft:"20px"}}
                        required type="textarea" placeholder="10자 이내로 작성해주세요." maxLength={10} />
                    <Form.Control.Feedback>유효 값입니다.</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">유효하지 않은 값입니다.</Form.Control.Feedback>
                </Form.Group >
                <Form.Group controlId="titleInput"
                            style={{marginTop:"30px",
                            marginBottom:"50px"}}>
                    <Form.Label><h4>제목</h4></Form.Label>
                    <Form.Control required type="textarea" placeholder="20자 이내로 작성해주세요." maxLength={20} />
                    <Form.Control.Feedback>유효한 제목 값입니다.</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">유효하지 않은 제목 값입니다.</Form.Control.Feedback>
                </Form.Group >
                <Form.Group controlId="contentText">
                    <Form.Label><h4>내용</h4></Form.Label>
                    <Form.Control required as="textarea" placeholder="100자 이내로 작성해주세요." maxLength={100} rows={20}/>
                    <Form.Control.Feedback>유효한 내용 값입니다.</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">유효하지 않은 내용 값입니다.</Form.Control.Feedback>
                </Form.Group>
                <Button variant="light" type="submit"
                style={{marginTop:"30px", marginBottom:"30px"}}>
                    저장
                </Button>
            </Form>
        </>
    );
};

export default BoardRegister;