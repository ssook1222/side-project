import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const BoardRegister: React.FC = () => {
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
    };

    return (
        <Form validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="titleInput">
                <Form.Label>제목</Form.Label>
                <Form.Control required type="textarea" placeholder="20자 이내로 작성해주세요." maxLength={20} />
                <Form.Control.Feedback>유효한 제목 값입니다.</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">유효하지 않은 제목 값입니다.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="contentText">
                <Form.Label>내용</Form.Label>
                <Form.Control required as="textarea" placeholder="100자 이내로 작성해주세요." maxLength={100} rows={20}/>
                <Form.Control.Feedback>유효한 내용 값입니다.</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">유효하지 않은 내용 값입니다.</Form.Control.Feedback>
            </Form.Group>
            <Button variant="light" type="submit">
                저장
            </Button>
        </Form>
    );
};

export default BoardRegister;