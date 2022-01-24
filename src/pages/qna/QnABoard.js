import React from 'react';
import {ListGroup} from "react-bootstrap";

class Boards extends React.Component {
    render() {
        return(
            <div>
                <ListGroup style={{width:"80%", marginLeft:"auto",marginRight:"auto", marginBottom:"30px"}}>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}
export default Boards