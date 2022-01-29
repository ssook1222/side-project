import React from 'react';
import {ListGroup} from "react-bootstrap";

class Boards extends React.Component {
    render() {
        return(
            <div>
                <ListGroup className="boardLists"
                           style={{width:"80%",
                               display:"block",
                               marginLeft:"auto",
                               marginRight:"auto",
                           marginBottom:"100px"}}>
                    <ListGroup.Item action href="#link1">
                        Link 1
                    </ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}
export default Boards