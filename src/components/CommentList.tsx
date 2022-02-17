import {useEffect, useState} from "react";
import {Comment} from "../dto/Comments";
import axios from "axios";
import {Button, Col, Form, Row} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";

interface Props {
    board_id: number;
}

export const CommentList: React.FC<Props> = (props) => {

    const [comments, setComments] = useState<Array<Comment>>([]);

    let navigate = useNavigate();
    let parameter: any = useParams();

    useEffect(() => {

        if (!props.board_id) {
            return;
        }
        getComments(props.board_id);
    }, [props.board_id]);

    const getComments = async (board_id: number) => {
        const res = await axios.get(`/api/comments?board_id=${props.board_id}`);
        if(props.board_id===board_id){
            setComments(res.data);
        }
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        event.stopPropagation();

        const form = event.currentTarget;

        const comment = {
            board_id: props.board_id,
            content: form.commentText.value
        }

        let res = await axios.post('/api/comment', comment);
        res = await axios.get(`/api/comment?id=${res.data.id}`);

        const newComments = [...comments];
        newComments.unshift(res.data);

        setComments(newComments);
        form.commentText.value = '';
    };

    const handleDelete = async (id: number | undefined) => {

        const res = await axios.delete(`/api/comment?id=${id}`);
        console.log(res.data)
        alert("정상적으로 삭제되었습니다.");
        window.location.replace(`/board-view/${props.board_id}`);
    }

    return (
        <>
            <Form className="mb-4" onSubmit={handleSubmit}
            style={{
                display:"block", width:"80%",
                marginLeft:"auto", marginRight:"auto",
                marginTop:"30px"
            }}>

            <hr style={{marginBottom:"40px"}}/>
                <Form.Group controlId="commentText">
                    <Form.Label><h5>댓글</h5></Form.Label>
                    <Form.Control required as="textarea" rows={4} />
                </Form.Group>
                <Button variant="light" type="submit"
                style={{marginTop:"10px"}}>
                    등록
                </Button>
            </Form>

            {
                comments.map((comment: Comment) =>
                    <Row className="comment" key={comment.id}
                         style={{display:"block", width:"80%",
                             marginLeft:"auto", marginRight:"auto",
                         marginTop:"30px"}}>
                        <Col>익명의 눈송이{comment.id}</Col>
                        <hr style={{marginTop:"10px",marginBottom:"10px"}}/>
                        <Col>{comment.content}</Col>
                        <Button
                                key={comment.id}
                                onClick={()=>{
                                    handleDelete(comment.id)}}
                                variant={"light"}
                                style={{display:"block",
                                    width:"20%",
                                marginTop:"30px"}}>삭 제</Button>
                    </Row>
                )
            }
        </>
    );
}