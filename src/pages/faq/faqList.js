import "./FAQ.css"
import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import Pagination from "./Pagination";

const Faqlist = (props) => {
    const [page, setPage] = useState(1);
    const limit = 5;
    const offset = (page - 1)*limit;
    
    return (
        <div id='faq_list'>
            {props.list.slice(offset, offset+limit).map((faq, index) => (
                <Accordion defaultActiveKey={index} flush>
                    <Accordion.Item eventKey={faq.question}>
                        <ColoredLine color="#162B7D" />
                        <Accordion.Header>
                            <div style={{fontWeight: 'bold'}}>{faq.question}</div>
                        </Accordion.Header>
                        <Accordion.Body><div style={{lineHeight: 1.8}}>{faq.answer}</div></Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            ))}
            <ColoredLine color="#162B7D" />

            <Pagination
                total={props.list.length}
                limit={limit}
                page={page}
                setPage={setPage} />
                    
        </div>
    )
}

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 3
        }}
    />
);


export default Faqlist;